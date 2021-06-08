import { DynamicCmps } from "./WapCmps/DynamicCmps";
import { Droppable } from "react-beautiful-dnd";
import { Loader } from "../Loader"

export function EditorWapSections({wap, onCmpFocus, onCloneCmp,onDeleteCmp, onUpdateCurrCmp, updateWap, isEdit, respView})  {
    if (!wap) return <Loader />
    if (!isEdit) {
      return (
        <>
          {wap.cmps.map((cmp) => {
            console.log("cmp: ", cmp.type)
            return (
              <DynamicCmps
                key={cmp.id}
                cmp={cmp}
                wap={wap}
                isEdit={isEdit}/>
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
            {wap.cmps && wap.cmps.length === 0 && <div className="editor-wap-empty">Drag here some sections to start</div>}
            
            {wap.cmps.map((cmp, idx) => {
              cmp.idx = idx
              cmp.parentId = 'main'
              return (
                <DynamicCmps
                  key={cmp.id}
                  cmp={cmp}
                  idx={idx}
                  wap={wap}
                  onCmpFocus={onCmpFocus}
                  onUpdateCurrCmp={onUpdateCurrCmp}
                  onCloneCmp={onCloneCmp}
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


