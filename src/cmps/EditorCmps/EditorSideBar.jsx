import { Component } from "react";
import { AddCmpBar } from "./SideBarNav/AddCmpBar"
import { EditCmpBar } from "./SideBarNav/EditCmpBar"

import UndoIcon from '@material-ui/icons/Undo';

// import RalewayWoff2 from '../../assets/fonts/Raleway/Raleway-Regular.ttf';
import { Box, Button, createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

import { SelectResponsiveView } from "../EditorCmps/SelectResponsiveView";

// const raleway = {
//   fontFamily: 'Raleway',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('Raleway'),
//     local('Raleway-Regular'),
//     url(${RalewayWoff2}) format('woff2')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };
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
            <div className="editor-side-bar flex column">
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <SelectResponsiveView handleChange={this.props.handleChange} />
                    <nav className="side-bar-nav flex">
                        <button className={`${this.props.editorStatus === 'add' && 'status-marker'}`} onClick={() => this.props.onAdd()}>Add</button>
                        <button className={`${this.props.editorStatus === 'edit' && 'status-marker'}`} onClick={() => this.props.onEdit()}>Edit</button>
                        <UndoIcon className={`undo ${this.props.undoWaps.length > 1 && 'undo-active'}`} onClick={this.props.onUndoWap} />
                    </nav>
                    <div className="editor-sections-list">
                        {this.DynamicCmp()}
                    </div>
                    <Box display="flex" mt={3}>
                        <Box mr={1}>
                            <Button variant="outlined" color="primary" onClick={this.props.onPublish}>Publish</Button>
                        </Box>
                        <Button variant="outlined" color="primary" onClick={this.props.saveWap}>Save</Button>
                    </Box>
                </ThemeProvider>
            </div>
        )
    }
}