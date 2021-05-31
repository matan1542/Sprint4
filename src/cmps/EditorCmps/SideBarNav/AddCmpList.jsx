import React from "react";
import { Draggable } from "react-beautiful-dnd";

export function AddCmpList({ cmps, sectionType }) {
    console.log('cmps',cmps
    .filter((cmp) => cmp.sectionType === sectionType),'sectionType',sectionType)
  return (
    <ul className="clean-list">
      {cmps
        .filter((cmp) => cmp.sectionType === sectionType)
        .map((cmp,idx) => {
          return (<Draggable draggableId={`d${cmp.id}`} index={idx}>
          {(provided, snapshot) => (
              <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
              >
                  <li value={cmp.id}>{cmp.sectionType}</li>
              </div>
          )}
      </Draggable>)
        })}
    </ul>
  );
}


