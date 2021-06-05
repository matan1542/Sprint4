import { Component } from "react";
import { AddCmpBar } from "./SideBarNav/AddCmpBar"
import { EditCmpBar } from "./SideBarNav/EditCmpBar"

// import RalewayWoff2 from '../../assets/fonts/Raleway/Raleway-Regular.ttf';
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

import { SelectResponsiveView } from "../EditorCmps/SelectResponsiveView";

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': 'raleway',
            },
        },
    },
});
export class EditorSideBar extends Component {

    DynamicCmp = (props) => {
        switch (this.props.editorStatus) {
            case 'add':
                return <AddCmpBar addCmp={this.props.addCmp}
                    getCmpById={this.props.getCmpById}
                    currCmp={this.props.currCmp}
                    changeCmpsIds={this.props.changeCmpsIds}
                    currWap={this.props.currWap}
                    cmps={this.props.cmps} />
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
        return (
            <div className="editor-side flex column">
                <div className="editor-side-bar flex column mb-4">
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <SelectResponsiveView handleChange={this.props.handleChange} />
                        <nav className="side-bar-nav flex">
                            <button className={`${this.props.editorStatus === 'add' && 'status-marker'}`} onClick={() => this.props.onAdd()}>Add</button>
                            <button className={`${this.props.editorStatus === 'edit' && 'status-marker'}`} onClick={() => this.props.onEdit()}>Edit</button>
                        </nav>
                        <div className="editor-sections-list">
                            {this.DynamicCmp()}
                        </div>
                    </ThemeProvider>
                    <div className="editor-publish w-100 flex space-around wrap" >
                        <button className="btn-publish" color="primary" onClick={this.props.onPublish}>Publish</button>
                    </div>
                </div>

            </div>
        )
    }
}