import React, { Component, Fragment } from "react";
// import { Draggable, Droppable } from "react-beautiful-dnd";
import { DynamicCmps } from "./WapCmps/DynamicCmps";

export class EditorWapCmps extends Component {

  render() {
    const { cmp, wap, onCmpFocus, onCloneCmp, onDeleteCmp, onUpdateCurrCmp, updateWap, isEdit } = this.props;
    const parentID = cmp.id
    return (
      <Fragment>
        {cmp.cmps.map((cmp, idx) => {
          cmp.parentId = parentID
          return (
            <DynamicCmps
              key={cmp.id}
              idx={idx}
              cmp={cmp}
              wap={wap}
              onCmpFocus={onCmpFocus}
              updateWap={updateWap}
              onUpdateCurrCmp={onUpdateCurrCmp}
              onCloneCmp={onCloneCmp}
              onDeleteCmp={onDeleteCmp}
              isEdit={isEdit}
            />
          );
        })}
      </Fragment>
    );
  }
}
