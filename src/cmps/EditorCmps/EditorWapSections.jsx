import React, { Component } from "react";
import { DynamicCmps } from "./WapCmps/DynamicCmps";
import { Droppable } from "react-beautiful-dnd";

export class EditorWapSections extends Component {
  render() {
    const { wap, onCmpFocus, onDeleteCmp, onUpdateCurrCmp, updateWap, isEdit, respView } = this.props;
    if (!wap) return <div>Loading...</div>;
    if (!isEdit) {
      return (
        <>
          {wap.cmps.map((cmp) => {
            return (
              <DynamicCmps
                key={cmp.id}
                cmp={cmp}
                wap={wap}
                isEdit={isEdit}
              />
            );
          })}
        </>
      )
    }
    return (
      <Droppable className="section" droppableId="1" isCombineEnabled>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={`editor-wap-size ${respView}`}
            {...provided.droppableProps}
            style={{ backgroundColor: snapshot.isDraggingOver ? 'rgb(207, 204, 204)' : 'whitesmoke' }}>
            {wap.cmps.length === 0 && <div className="editor-wap-empty">Drag here some sections to start</div>}
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
                  isEdit={isEdit}
                  respView={respView}
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


