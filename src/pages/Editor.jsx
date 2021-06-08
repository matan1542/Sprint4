import { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import { cmpService } from "../services/cmp.service.js";
import { wapService } from "../services/wap.service.js";
import { socketService } from "../services/socket.service.js";
import { utilService } from "../services/utils.js";

import {
  loadWaps,
  loadCmps,
  setWapToEdit,
} from "../store/actions/wap.actions.js";
import { setMsg } from "../store/actions/user.msg.actions.js";
// import { ScreenCapture } from 'react-screen-capture'

import { EditorSideBar } from "../cmps/EditorCmps/EditorSideBar";
import { EditorWapSections } from "../cmps/EditorCmps/EditorWapSections";
import { UserMsg } from "../cmps/UserMsg.jsx";
import { Loader } from "../cmps/Loader.jsx";
import { prev } from "cheerio/lib/api/traversing";

export class _Editor extends Component {
  state = {
    editorStatus: "add",
    currWap: null,
    currCmp: null,
    undoWaps: [],
    respView: "large-view",
    isLodaing: false,
  };

  async componentDidMount() {
    if (!this.props.waps) await this.props.loadWaps();
    if (!this.props.cmps) await this.props.loadCmps();
    await this.setCurrWap();
    console.log(this.state.currWap);
    let screenView =
      window.innerWidth <= 555
        ? "small-view"
        : window.innerWidth <= 815
        ? "medium-view"
        : "large-view";
    let status = window.innerWidth <= 555 ? "edit" : "add";
    await socketService.setup();
    socketService.emit(
      "editor id",
      this.state.currWap.sessionId || this.props.match.params.roomId
    );
    socketService.on("update wap", this.updateSocketWap);
    // socket.broadcast.emit('mouse_position_update', data);
    this.setState({ respView: screenView, editorStatus: status });
  }



  componentWillUnmount() {
    this.props.setWapToEdit(null);
    socketService.off("update wap", this.updateSocketWap);
    socketService.terminate();
  }

  setCurrWap = async () => {
    let currWap;
    if (!this.props.wapToEdit) currWap = await wapService.create();
    else {
      currWap = { ...this.props.wapToEdit };
      delete currWap._id;
    }
    currWap.isEdit = true;
    currWap.coordinates = {
      x:null,
      y:null
    }
    if (!currWap.sessionId && !this.props.match.params.roomId) {
      currWap.sessionId = utilService.makeId();
      this.props.history.push(`/editor/${currWap.sessionId}`);
    }
    const { undoWaps } = this.state;
    undoWaps.push(JSON.parse(JSON.stringify(currWap)));
    this.setState({ ...this.state, currWap, undoWaps },()=>{
      socketService.emit('update wap',this.state.currWap)
    });
  };

  updateSocketWap = (currWap) => {
    this.setState((prevState) => ({
      ...prevState,
      currWap,
    }));
  };

  onCmpFocus = (ev, currCmp) => {
    ev.stopPropagation();
    this.setState(
      (prevState) => ({
        ...prevState,
        currCmp,
      }),
      this.onEdit
    );
  };

  onDeleteCmp = async (cmpId) => {
    const undoWaps = await this.addUndoWap();
    const currWap = await wapService.deleteTarget(this.state.currWap, cmpId);

    this.setState((prevState) => ({
      ...prevState,
      currWap,
      undoWaps,
      currCmp: null,
    }),()=>{
      socketService.emit('update wap',this.state.currWap)
    });
  };

  onUpdateCurrCmp = async (currCmp) => {
    const undoWaps = await this.addUndoWap();
    const copyCmp = { ...currCmp };
    delete copyCmp.id;
    const copyWap = { ...this.state.currWap };
    const currWap = await wapService.updateTarget(copyWap, currCmp.id, copyCmp);
    this.setState((prevState) => ({
      ...prevState,
      currCmp,
      currWap,
      undoWaps,
    }),()=>{
      socketService.emit('update wap',this.state.currWap)
    });
  };

  onCloneCmp = async (cmp, currWap) => {
    console.log("cmp:", cmp);
    const undoWaps = await this.addUndoWap();
    const clonedCmp = await cmpService.changeIds(cmp);
    if (cmp.parentId === "main") {
      currWap.cmps.splice(cmp.idx, 0, clonedCmp);
    } else {
      // console.log('cmp.parentId:', cmp, cmp.parentId)
      const parent = await wapService.getTarget(currWap, cmp.parentId);
      // console.log(parent);
      parent.cmps.splice(cmp.idx, 0, clonedCmp);
    }
    this.setState((prevState) => ({
      ...prevState,
      currWap,
      undoWaps,
    }),()=>{
      socketService.emit('update wap',this.state.currWap)
    });
  };

  onEdit = () => {
    this.setState({ editorStatus: "edit" });
  };
  onAdd = () => {
    this.setState({ editorStatus: "add" });
  };

  onAddCmp = async (cmpId, idx) => {
    const undoWaps = await this.addUndoWap();
    const { currWap } = this.state;
    const wapToSave = { ...currWap };
    cmpId = cmpId.substring(1);
    const cmpToUpdate = await this.props.cmps.find((cmp) => cmp.id === cmpId);
    const cmp = { ...cmpToUpdate };
    const updatedCmp = await cmpService.changeIds(cmp);
    let wap = await wapService.addCmp(wapToSave, updatedCmp, idx);
    wap = JSON.parse(JSON.stringify(wap));
    socketService.emit("change wap", wap);
    this.setState((prevState) => ({
      ...prevState,
      currWap: wap,
      undoWaps,
    }),()=>{
      socketService.emit('update wap',this.state.currWap)
    });
  };

  onUndoWap = () => {
    if (this.state.undoWaps.length < 2) return;
    const undoWaps = JSON.parse(JSON.stringify(this.state.undoWaps));
    const currWap = JSON.parse(JSON.stringify(undoWaps.pop()));
    this.setState((prevState) => ({
      ...prevState,
      currWap,
      undoWaps,
    }),()=>{
      socketService.emit('update wap',this.state.currWap)
    });
  };

  addUndoWap = () => {
    const wap = JSON.parse(JSON.stringify(this.state.currWap));
    const undoWaps = JSON.parse(JSON.stringify(this.state.undoWaps));
    undoWaps.push(wap);
    return Promise.resolve(undoWaps);
  };

  onSaveWap = async () => {
    try {
      const newWap = { ...this.state.currWap };
      const savedWap = await wapService.save(newWap);
      await this.props.loadWaps();
      return Promise.resolve(savedWap[0]);
    } catch (err) {
      console.log(err);
      this.props.setMsg(
        "There was a problam. please try again later!",
        "error"
      );
      setTimeout(() => {
        this.props.setMsg("", "error");
      }, 3000);
      throw new Error(err);
    }
  };

  onPublishWap = async () => {
    if (!this.state.currWap.cmps.length) {
      this.props.setMsg("You can't publish empty Website", "error");
      await setTimeout(() => {
        this.props.setMsg("", "error");
      }, 3000);
      return;
    }
    this.setState({ isLodaing: true });
    const newWap = await this.onSaveWap();
    this.setState({ isLodaing: false });
    this.props.history.push(`/publish/${newWap._id}`);
  };

  onDragEnd = async (res) => {
    const { destination, source, draggableId } = res;
    if (!destination) {
      return;
    }
    if (
      destination.draggableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (source.droppableId === "1" && destination.droppableId === "2") return;

    if (source.droppableId === "1" && destination.droppableId === "1") {
      const wapCmps = this.state.currWap;
      const tempCmp = wapCmps.cmps[source.index];
      wapCmps.cmps.splice(source.index, 1, wapCmps.cmps[destination.index]);
      wapCmps.cmps.splice(destination.index, 1, tempCmp);
      this.setState((prevState) => ({
        ...prevState,
        currWap: wapCmps,
      }),()=>{
        socketService.emit('update wap',this.state.currWap)
      });
      return;
    }
    if (source.droppableId === "2" && destination.droppableId === "1") {
      await this.onAddCmp(draggableId, destination.index);
    }
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    this.setState((prevState) =>
      field === "type"
        ? { [field]: value }
        : {
            ...prevState,
            [field]: value,
          }
    );
  };

  // onChangeMouse=(ev)=>{
  //   var prevMouseX, prevMouseY;
  //   var intervalID = window.setInterval(function(){
  //      ... you get your mouse coordinates
    
  //      if (prevMouseX !== x || !prevMouseY !== y) {
  //         socket.emit('mouse_position', {mx : x, my : y});
  //      }
  //   }, 500);
  // }}
  

  render() {
    const { editorStatus, currCmp, currWap, respView, undoWaps, isLodaing } =
      this.state;
    const { addCmp, changeCmpsIds, updateWap, cmps } = this.props;
    if (!currWap || isLodaing) return <Loader />;
    return (
      <section className="app-editor flex space-between" >
        <UserMsg />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <EditorSideBar
            onUndoWap={this.onUndoWap}
            undoWaps={undoWaps}
            currCmp={currCmp}
            onUpdateCurrCmp={this.onUpdateCurrCmp}
            editorStatus={editorStatus}
            onEdit={this.onEdit}
            onAdd={this.onAdd}
            addCmp={addCmp}
            currWap={currWap}
            saveWap={this.onSaveWap}
            onPublish={this.onPublishWap}
            changeCmpsIds={changeCmpsIds}
            onDragEnd={this.onDragEnd}
            cmps={cmps}
            isEdit={true}
            handleChange={this.handleChange}
          />
          <div className="editor-wap" >
            <EditorWapSections
              wap={currWap}
              isEdit={true}
              onCmpFocus={this.onCmpFocus}
              currCmp={currCmp}
              onUpdateCurrCmp={this.onUpdateCurrCmp}
              onCloneCmp={this.onCloneCmp}
              onDeleteCmp={this.onDeleteCmp}
              updateWap={updateWap}
              respView={respView}
            />
          </div>
        </DragDropContext>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    waps: state.wapModule.waps,
    cmps: state.wapModule.cmps,
    wapToEdit: state.wapModule.wapToEdit,
  };
}
const mapDispatchToProps = {
  loadWaps,
  loadCmps,
  setMsg,
  setWapToEdit,
};

export const Editor = connect(mapStateToProps, mapDispatchToProps)(_Editor);
