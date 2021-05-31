// import {WapTxt} from '../WapCmps/WapTxt'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { cmpService } from '../../../services/cmp.service.js'
export function AddCmpBar({ addCmp, changeCmpsIds, currWap }) {
    // const onAddCmp = async ({ target }) => {
    //     const value = target.attributes.value.value;
    //     const res = await cmpService.getCmpsById(value)
    //     console.log('res', res)
    //     const cmp = await changeCmpsIds(res);
    //     console.log("🚀 ~ file: AddCmpBar.jsx ~ line 10 ~ onAddCmp ~ cmp", cmp)
    //     await addCmp(currWap, cmp)
    // }

    return (
        <Droppable droppableId="2" isCombineEnabled>
            {(provided, snapshot) => (
                <div className="add-bar flex column"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <ul className="add-cmp-list clean-list flex justify-center column align-text-center">
                        <Draggable draggableId="wc01" index={0}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <li value='wc01' /* onClick={onAddCmp} */>Header</li>
                                </div>
                            )}
                        </Draggable>
                        <Draggable draggableId="wc05" index={1}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <li value='wc05' /* onClick={onAddCmp} */>Hero</li>
                                </div>
                            )}
                        </Draggable>
                        <Draggable draggableId="wc023" index={2}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <li value='wc023' /* onClick={onAddCmp} */>Form</li>
                                </div>
                            )}
                        </Draggable>



                    </ul>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
    // <Droppable
    //     droppableId="2"
    //     type="done">
    //     {(provided, snapshot) => {
    //         <div className="add-bar flex column"
    //             ref={provided.innerRef}
    //             {...provided.droppableProps}>
    //             <ul className="add-cmp-list clean-list flex justify-center column align-text-center">
    //                 <li value='wc01' onClick={onAddCmp}>Header</li>
    //                 <li value='wc05' onClick={onAddCmp}>Hero</li>
    //                 <li value='wc023' onClick={onAddCmp}>Form</li>
    //             </ul>

    //         </div>
    //     }}
    // </Droppable>