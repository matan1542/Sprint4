// import {WapTxt} from '../WapCmps/WapTxt'
import { Draggable, Droppable } from 'react-beautiful-dnd';
export function AddCmpBar() {


    return (
        <Droppable droppableId="2" isCombineEnabled>
            {(provided, snapshot) => (
                <div className="add-bar flex column"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <ul className="add-cmp-list clean-list flex justify-center column align-text-center">
                        <Draggable draggableId="awc01" index={0}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <li value='wc01' >Header</li>
                                </div>
                            )}
                        </Draggable>
                        <Draggable draggableId="awc05" index={1}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <li value='wc05' >Hero</li>
                                </div>
                            )}
                        </Draggable>
                        <Draggable draggableId="awc023" index={2}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <li value='wc023' >Form</li>
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