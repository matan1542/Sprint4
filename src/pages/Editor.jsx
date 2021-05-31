import { EditorSideBar } from "../cmps/EditorCmps/EditorSideBar";
import { EditorWapSections } from "../cmps/EditorCmps/EditorWapSections";
import { Component } from "react";
import { connect } from "react-redux";
import {
  loadWaps,
  getById,
  setCurrCmp,
  updateCurrCmp,
  deleteCmp,
  updateWap,
  loadCmps,
  changeCmpsIds,
  addCmp,
} from "../store/actions/wap.actions.js";
import { DragDropContext } from "react-beautiful-dnd";
import { cmpService } from "../services/cmp.service.js";
import { utilService } from "../services/utils.js";
// import { wapService } from "../services/wap.service";

export class _Editor extends Component {
  state = {
    editorStatus: "add",
  };
  async componentDidMount() {
    // this.props.loadWaps();
    await this.props.loadCmps();
    await this.props.getById("5e28393890dd7201a06d4e44");
  }
  onDeleteCmp = async (cmpId) => {
    await this.props.deleteCmp(this.props.currWap, cmpId);
    this.props.setCurrCmp(null);
  };

  onCmpFocus = async (ev, cmp) => {
    ev.stopPropagation();
    console.log("cmp", cmp);
    await this.props.setCurrCmp(cmp);
    this.onEdit();
  };
  onUpdateCurrCmp = async (cmp) => {
    const copyCmp = { ...cmp };
    delete copyCmp.id;
    await this.props.updateCurrCmp(this.props.currWap, cmp.id, copyCmp);
    await this.props.setCurrCmp(cmp);
  };

  onEdit = () => {
    this.setState({ editorStatus: "edit" });
  };
  onAdd = () => {
    this.setState({ editorStatus: "add" });
  };

  onAddCmp = async (cmpId, idx) => {
    cmpId = [...cmpId];
    cmpId.shift();
    cmpId = cmpId.join("");
    const cmp = await cmpService.getCmpsById(cmpId);
    const updatedCmp = await this.props.changeCmpsIds(cmp);
    const wap = await this.props.addCmp(this.props.currWap, updatedCmp, idx);
    return wap;
  };

  onDragEnd = async (res) => {
    console.log("🚀 ~ file: Editor.jsx ~ line 65 ~ _Editor ~ res", res);
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
      const wapCmps = this.props.currWap;
      const tempCmp = wapCmps.cmps[source.index];
      wapCmps.cmps.splice(source.index, 1, wapCmps.cmps[destination.index]);
      wapCmps.cmps.splice(destination.index, 1, tempCmp);
      await this.props.updateWap(wapCmps);
      return;
    }
    if (source.droppableId === "2" && destination.droppableId === "1") {
      const wap = await this.onAddCmp(draggableId, destination.index);
      await this.props.updateWap(wap);
      return;
    }
  };

  render() {
    // console.log(this.state.editorStatus)
    const { editorStatus } = this.state;
    const { currCmp, currWap, addCmp, changeCmpsIds, updateWap, cmps } =
      this.props;
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
    currWap: state.wapModule.currWap,
    currCmp: state.wapModule.currCmp,
  };
}
const mapDispatchToProps = {
  loadWaps,
  getById,
  setCurrCmp,
  updateCurrCmp,
  deleteCmp,
  updateWap,
  loadCmps,
  changeCmpsIds,
  addCmp,
};

export const Editor = connect(mapStateToProps, mapDispatchToProps)(_Editor);
