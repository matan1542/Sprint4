import { EditorSideBar } from "../cmps/EditorCmps/EditorSideBar";
import { EditorWapSections } from "../cmps/EditorCmps/EditorWapSections";
import { Component } from "react";
import { connect } from "react-redux";
import {
  loadWaps,
  loadCmps,
} from "../store/actions/wap.actions.js";
import { DragDropContext } from "react-beautiful-dnd";
import { cmpService } from "../services/cmp.service.js";
import { wapService } from "../services/wap.service";

export class _Editor extends Component {
  state = {
    editorStatus: "add",
    currWap: null,
    currCmp: null
  };
  async componentDidMount() {
    if (!this.props.waps) await this.props.loadWaps()
    if (!this.props.cmps) await this.props.loadCmps()
    await this.setCurrWap('5e28393890dd7201a06d4e44');
  }

  setCurrWap = async (wapId) => {
    let currWap
    if (!wapId) currWap = await wapService.create()
    else currWap = this.props.waps.find(wap => {
      return wap._id === wapId
    })
    if (!currWap) currWap = wapService.create()
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
    return wap;
  };

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
      this.setState(prevState => ({
        ...prevState,
        currWap: wap
      }))
      return;
    }
  };

  render() {
    const { editorStatus, currCmp, currWap } = this.state;
    const { addCmp, changeCmpsIds, updateWap, cmps } = this.props;
    if (!currWap) return <div>Loading...</div>;
    return (
      <section className="app-editor flex space-between">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <EditorSideBar
            currCmp={currCmp}
            onUpdateCurrCmp={this.onUpdateCurrCmp}
            editorStatus={editorStatus}
            onEdit={this.onEdit}
            onAdd={this.onAdd}
            addCmp={addCmp}
            currWap={currWap}
            changeCmpsIds={changeCmpsIds}
            onDragEnd={this.onDragEnd}
            cmps={cmps}
          />
          <div className="editor-wap">
            <EditorWapSections
              wap={currWap}
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
  };
}
const mapDispatchToProps = {
  loadWaps,
  loadCmps,
};

export const Editor = connect(mapStateToProps, mapDispatchToProps)(_Editor);
