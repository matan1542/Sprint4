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
                    <div className="wap-section"
                        style={{
                            ...cmp.info.style, backgroundColor: snapshot.isDragging ?
                                'skyblue' : cmp.info.style.backgroundColor
                        }}
                        onClick={(ev) => onCmpFocus(ev, {
                            "id": "wc01",
                            "type": "wap-section",
                            "info": {
                                "style": {
                                    "backgroundColor": "#101010",
                                    "display": "flex",
                                    "padding": "10px",
                                    "alignItems": "center",
                                    "justifyContent": "space-between"
                                }
                            },
                            "cmps": [
                                {
                                    "id": "wc011",
                                    "type": "wap-text",
                                    "info": {
                                        "txt": "Logo",
                                        "style": {
                                            "fontSize": "24px",
                                            "color": "#ffffff",
                                            "backgroundColor": "#101010",
                                            "padding": "10px",
                                            "borderRadius": "15px",
                                            "textAlign": "center"
                                        }
                                    },
                                    "cmps": []
                                },
                                {
                                    "id": "wc012",
                                    "type": "wap-nav",
                                    "info": {
                                        "style": {},
                                    },
                                    "cmps": [
                                        {
                                            "id": "wc0121",
                                            "type": "wap-btn",
                                            "info": {
                                                "txt": "Home",
                                                "url": "",
                                                "style": {
                                                    "color": "#ffffff",
                                                    "backgroundColor": "inherit",
                                                    "border": "0px",
                                                    "marginLeft": "10px"
                                                }
                                            }
                                        },
                                        {
                                            "id": "wc0123",
                                            "type": "wap-btn",
                                            "info": {
                                                "txt": "News",
                                                "url": "",
                                                "style": {
                                                    "color": "#ffffff",
                                                    "backgroundColor": "inherit",
                                                    "border": "0px",
                                                    "marginLeft": "10px"
                                                }
                                            }
                                        },
                                        {
                                            "id": "wc0122",
                                            "type": "wap-btn",
                                            "info": {
                                                "txt": "About",
                                                "url": "",
                                                "style": {
                                                    "color": "#ffffff",
                                                    "backgroundColor": "inherit",
                                                    "border": "0px",
                                                    "marginLeft": "10px"
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        })}>
                        {cmp.cmps && (
                            <EditorWapCmps
                                cmp={cmp}
                                onCmpFocus={onCmpFocus}
                                onDeleteCmp={onDeleteCmp}
                                onUpdateCurrCmp={onUpdateCurrCmp}
                                updateWap={updateWap}
                                wap={wap}
                            />
                        )}
                        <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}><DeleteForeverOutlinedIcon /></button>

                    </div>
                </div>
            )}
        </Draggable>
    );
}
