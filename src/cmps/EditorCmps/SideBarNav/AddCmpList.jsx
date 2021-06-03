import React from "react";
import { Draggable } from "react-beautiful-dnd";

export function AddCmpList({ cmps, sectionType }) {
  return (
    <ul className="clean-list">
      {cmps
        .filter((cmp) => cmp.sectionType === sectionType)
        .map((cmp, idx) => {
          return (<Draggable draggableId={`${idx}${cmp.id}`} key={cmp.id} index={idx}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                <li key={idx} value={cmp.id}> <img className="add-list-img" src={cmp.url} alt="type" /></li>
              </div>
            )}
          </Draggable>)
        })}
    </ul>
  );
}


