import React, { Component } from "react";
import { DynamicCmps } from "./WapCmps/DynamicCmps";
import { Droppable } from "react-beautiful-dnd";

export class EditorWapSections extends Component {
  render() {
    const { wap, onCmpFocus, onDeleteCmp, onUpdateCurrCmp, updateWap } = this.props;
    // console.log('onUpdateCurrCmp editorwapSection', onUpdateCurrCmp)
    // console.log(wap);
    if (!wap) return <div>Loading...</div>;
    return (
      <Droppable className="section" droppableId="1" isCombineEnabled>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ backgroundColor: snapshot.isDraggingOver ? 'rgb(207, 204, 204)' : 'whitesmoke' }}>
            {wap.cmps.map((cmp, idx) => {
              return (
                <DynamicCmps
                  key={cmp.id}
                  cmp={cmp}
                  idx={idx}
                  wap={wap}
                  onCmpFocus={onCmpFocus}
                  onUpdateCurrCmp={onUpdateCurrCmp}
                  onDeleteCmp={onDeleteCmp}
                  updateWap={updateWap}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    );
  }
}


