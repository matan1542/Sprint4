import { EditorWapCmps } from "../EditorWapCmps";
import { Draggable, /* Droppable */ } from "react-beautiful-dnd";

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
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
    if (!wap.isEdit) {
        return (
            <div className="wap-section publish"
                style={{ ...cmp.info.style }}>
                {cmp.cmps && (
                    <EditorWapCmps
                        cmp={cmp}
                        wap={wap}
                    />
                )}
            </div>
        )
    } else {
        return (

            <Draggable className="section" draggableId={cmp.id} index={idx} type="section"  >
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className="wap-section"
                            style={{
                                ...cmp.info.style, backgroundColor: snapshot.isDragging ?
                                    'skyblue' : cmp.info.style.backgroundColor
                            }}
                            onClick={(ev) => onCmpFocus(ev, cmp)}>
                            {cmp.cmps && (
                                // <Droppable type="section" direction={(cmp.info.style.flexDirection === 'row' || cmp.info.style.flexDirection === 'row-reverse') ? 'horizontal' : 'vertical'}
                                //     droppableId={cmp.id} isCombineEnabled>
                                //     {(provided) => (
                                //         <div
                                //             ref={provided.innerRef}
                                //             {...provided.droppableProps}
                                //         >
                                <EditorWapCmps
                                    cmp={cmp}
                                    onCmpFocus={onCmpFocus}
                                    onDeleteCmp={onDeleteCmp}
                                    onUpdateCurrCmp={onUpdateCurrCmp}
                                    updateWap={updateWap}
                                    wap={wap}
                                />
                                //             {provided.placeholder}
                                //         </div>
                                //     )}
                                // </Droppable>
                            )}


                            <div className="wap-section-tool">
                                <button className="wap-el-btn-edit" onClick={() => onCmpFocus(cmp)}><EditOutlinedIcon /></button>
                                <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}><DeleteForeverOutlinedIcon /></button>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>

        );

    }
}
