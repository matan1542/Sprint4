import { Component } from "react";
import { connect } from "react-redux";

import { DragDropContext } from "react-beautiful-dnd";
import { cmpService } from "../services/cmp.service.js";
import { wapService } from "../services/wap.service";

import { EditorSideBar } from "../cmps/EditorCmps/EditorSideBar";
import { EditorWapSections } from "../cmps/EditorCmps/EditorWapSections";

import { loadWaps, loadCmps, setWapToEdit } from "../store/actions/wap.actions.js";
import { setMsg } from '../store/actions/user.msg.actions.js'

import { UserMsg } from "../cmps/UserMsg.jsx"

export class _Editor extends Component {
  state = {
    editorStatus: "add",
    currWap: null,
    currCmp: null,
    respView: "large-view"
  };
  async componentDidMount() {
    if (!this.props.waps) await this.props.loadWaps()
    if (!this.props.cmps) await this.props.loadCmps()
    await this.setCurrWap();

  }

  componentWillUnmount() {
    this.props.setWapToEdit(null)
  }


  setCurrWap = async () => {
    let currWap
    if (!this.props.wapToEdit) currWap = await wapService.create()
    else {
      currWap = { ...this.props.wapToEdit }
      delete currWap._id
    }
    currWap.isEdit = true
    await this.setState({ currWap })
  }

  onCmpFocus = (ev, currCmp) => {
    ev.stopPropagation();
    this.setState(prevState => ({
      ...prevState,
      currCmp
    }), () => this.onEdit())
  }

  onDeleteCmp = async (cmpId) => {
    const currWap = await wapService.deleteTarget(this.state.currWap, cmpId);
    this.setState(prevState => ({
      ...prevState,
      currWap,
      currCmp: null
    }))
  };

  onUpdateCurrCmp = async (currCmp) => {
    const copyCmp = { ...currCmp };
    delete copyCmp.id;
    const currWap = await wapService.updateTarget(this.state.currWap, currCmp.id, copyCmp)
    this.setState(prevState => ({
      ...prevState,
      currCmp,
      currWap
    }))
  };

  onEdit = () => {
    this.setState({ editorStatus: "edit" });
  };
  onAdd = () => {
    this.setState({ editorStatus: "add" });
  };

  onAddCmp = async (cmpId, idx) => {
    const { currWap } = this.state
    cmpId = [...cmpId];
    cmpId.shift();
    cmpId = cmpId.join("");
    const cmpToUpdate = await this.props.cmps.find(cmp => cmp.id === cmpId);
    const cmp = { ...cmpToUpdate }
    const updatedCmp = await cmpService.changeIds(cmp);
    const wap = await wapService.addCmp(currWap, updatedCmp, idx);
    this.setState(prevState => ({
      ...prevState,
      currWap: wap
    }))
    return wap;
  };

  onSaveWap = async () => {
    try {
      if (!this.state.currWap.cmps.length) {
        this.props.setMsg('You can\'t save empty Wap', 'error')
        await setTimeout(() => {
          this.props.setMsg('', 'error')
        }, 3000)
        return
      }
      this.props.setMsg('Saving...', 'success')
      const newWap = { ...this.state.currWap }
      const savedWap = await wapService.save(newWap)
      await this.props.loadWaps()
      this.props.setMsg('Saved!', 'success')
      setTimeout(() => {
        this.props.setMsg('', 'success')
      }, 3000)
      this.setState(prevState => ({
        ...prevState,
        currWap: savedWap[0]
      }))
    } catch (err) {
      console.log(err);
      this.props.setMsg('There was a problam. please try again later!', 'error')
      setTimeout(() => {
        this.props.setMsg('', 'error')
      }, 3000)
      throw new Error(err);
    }
  }

  onPublishWap = async () => {
    console.log("🚀 ~ file: Editor.jsx ~ line 23 ~ _Editor ~ currWap", this.state.currWap)
    if (!this.state.currWap._id) {
      this.props.setMsg('Please save wap before publish', 'error')
      await setTimeout(() => {
        this.props.setMsg('', 'error')
      }, 3000)
      return
    }
    if (!this.state.currWap.cmps.length) {
      this.props.setMsg('You can\'t publish empty Wap', 'error')
      await setTimeout(() => {
        this.props.setMsg('', 'error')
      }, 3000)
      return
    }
    const newWap = { ...this.state.currWap }
    this.props.history.push(`/publish/${newWap._id}`)
  }

  onDragEnd = async (res) => {
    const { destination, source, draggableId, /* type */ } = res;
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

    // if (type === 'section') {
    //   const wapCmps = this.props.currWap;
    //   const tempCmps = wapCmps.cmps.find(cmp => cmp.id === source.droppableId)
    //   const tempCmp = tempCmps.cmps[source.index]
    //   tempCmps.cmps.splice(source.index, 1, tempCmps.cmps[destination.index]);
    // tempCmps.cmps.splice(destination.index, 1, tempCmp);
    // await this.props.updateWap(wapCmps);
    //   return;
    // }

    if (source.droppableId === "1" && destination.droppableId === "1") {
      const wapCmps = this.state.currWap;
      const tempCmp = wapCmps.cmps[source.index];
      wapCmps.cmps.splice(source.index, 1, wapCmps.cmps[destination.index]);
      wapCmps.cmps.splice(destination.index, 1, tempCmp);
      this.setState(prevState => ({
        ...prevState,
        currWap: wapCmps
      }))
      return;
    }
    if (source.droppableId === "2" && destination.droppableId === "1") {
      const wap = await this.onAddCmp(draggableId, destination.index);
      // this.setState(prevState => ({
      //   ...prevState,
      //   currWap: wap
      // }))
      return;
    }
  };

  handleChange = ({ target }) => {
    console.log(target)
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    this.setState(prevState => ((field === 'type') ? { [field]: value } : {
      ...prevState,
      [field]: value
    }
    ))
    console.log(this.state)
  }

  render() {
    const { editorStatus, currCmp, currWap } = this.state;
    const { addCmp, changeCmpsIds, updateWap, cmps } = this.props;
    if (!currWap) return <div>Loading...</div>;
    return (
      <section className="app-editor flex space-between">
        <UserMsg />
        <DragDropContext onDragEnd={this.onDragEnd}>

          <EditorSideBar
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
          <div className="editor-wap">
            <EditorWapSections
              wap={currWap}
              isEdit={true}
              onCmpFocus={this.onCmpFocus}
              currCmp={currCmp}
              onUpdateCurrCmp={this.onUpdateCurrCmp}
              onDeleteCmp={this.onDeleteCmp}
              updateWap={updateWap}
              

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
    wapToEdit: state.wapModule.wapToEdit
  };
}
const mapDispatchToProps = {
  loadWaps,
  loadCmps,
  setMsg,
  setWapToEdit
};

export const Editor = connect(mapStateToProps, mapDispatchToProps)(_Editor);
