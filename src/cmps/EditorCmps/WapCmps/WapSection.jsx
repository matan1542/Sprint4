import { EditorWapCmps } from "../EditorWapCmps";
import { Draggable } from "react-beautiful-dnd";

import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export function WapSection({
    cmp,
    onCmpFocus,
    onUpdateCurrCmp,
    onDeleteCmp,
    idx,
    updateWap,
    wap,
    isDraggingOver
}) {
    return (
        <Draggable className="section" draggableId={cmp.id} index={idx}  >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="wap-section" style={{ ...cmp.info.style, backgroundColor: snapshot.isDragging ? 'skyblue' : cmp.info.style.backgroundColor }}>
                        {cmp.cmps && (
                            <EditorWapCmps
                                cmp={cmp}
                                onCmpFocus={onCmpFocus}
                                onDeleteCmp={onDeleteCmp}
                                onUpdateCurrCmp={onUpdateCurrCmp}
                                updateWap={updateWap}
                                wap={wap}
                                style={`background-color:${snapshot.isDragging ? 'red' : 'white'}`}
                            />
                        )}
                        <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}><DeleteForeverOutlinedIcon /></button>

                    </div>
                </div>
            )}
        </Draggable>
    );
}
