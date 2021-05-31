import { Component } from "react";
// import { DragDropContext } from "react-beautiful-dnd";
import { AddCmpBar } from "./SideBarNav/AddCmpBar"
import { EditCmpBar } from "./SideBarNav/EditCmpBar"
export class EditorSideBar extends Component {

    DynamicCmp = (props) => {
        // console.log('this.props.currCmp',this.props.currCmp)
        switch (this.props.editorStatus) {
            case 'add':
                return <AddCmpBar addCmp={this.props.addCmp}
                getCmpById={this.props.getCmpById} 
                currCmp={this.props.currCmp}
                changeCmpsIds={this.props.changeCmpsIds}
                currWap={this.props.currWap}
                cmps={this.props.cmps}/>
            case 'edit':
                return <EditCmpBar
                    currCmp={this.props.currCmp}
                    onUpdateCurrCmp={this.props.onUpdateCurrCmp}
                />
            default:
                return //...some default error view
        }
    }

    render() {
        // console.log('editorStatus:', this.props.editorStatus)
        return (
            <div className="editor-side-bar flex column">
                <nav className="side-bar-nav flex">
                    <button onClick={() => this.props.onAdd()}>Add</button>
                    <button onClick={() => this.props.onEdit()}>Edit</button>
                </nav>
                {this.DynamicCmp()}
                <button className="btn btn-publish">Publish</button>
            </div>
        )
    }
}