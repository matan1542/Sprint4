import { EditorWapCmps } from "../EditorWapCmps";
import { Draggable } from "react-beautiful-dnd";

import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
export function WapSection({
  cmp,
  onCmpFocus,
  onUpdateCurrCmp,
  onCloneCmp,
  onDeleteCmp,
  idx,
  updateWap,
  wap,
  isEdit,
  isDraggingOver,
  respView,
}) {
  let cmpType = cmp.sectionType
  .split("-", 1)[0]
  .toLowerCase()
  .split("-", 1)[0]
  .toLowerCase() 
  if (!isEdit) {
    return (
      <div
        className={`wap-section publish wap-${cmpType}`}
        style={{ ...cmp.info.style }}
      >
        {cmp.cmps && <EditorWapCmps cmp={cmp} wap={wap} isEdit={isEdit} />}
      </div>
    );
  } else {
    return (
      <Draggable
        className="section"
        draggableId={cmp.id}
        index={idx}
        type="section"
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div
              className={`wap-section wap-${cmpType} `}
              style={{
                ...cmp.info.style,
                backgroundColor: snapshot.isDragging
                  ? "skyblue"
                  : cmp.info.style.backgroundColor,
              }}
              onClick={(ev) => onCmpFocus(ev, cmp)}
            >
              {cmp.cmps && (
                <EditorWapCmps
                  cmp={cmp}
                  onCmpFocus={onCmpFocus}
                  onDeleteCmp={onDeleteCmp}
                  onUpdateCurrCmp={onUpdateCurrCmp}
                  updateWap={updateWap}
                  onCloneCmp={onCloneCmp}
                  wap={wap}
                  isEdit={isEdit}
                />
              )}

              <div className="wap-section-tool">
                <button
                  className="wap-el-btn-edit"
                  onClick={(ev) => onCmpFocus(ev, cmp)}
                >
                  <EditOutlinedIcon />
                </button>
                <button
                  className="wap-el-btn-del"
                  onClick={() => onCloneCmp(cmp, wap)}
                >
                  <FileCopyOutlinedIcon />
                </button>
                <button
                  className="wap-el-btn-del"
                  onClick={() => onDeleteCmp(cmp.id)}
                >
                  <DeleteForeverOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}
