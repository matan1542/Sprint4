import { Component } from "react";

import { EditCmpStyleList } from "./EditCmpStyleList"

export class EditCmpBar extends Component {
  render() {
    const { currCmp, onUpdateCurrCmp } = this.props
    if (!currCmp?.info) return <div className="edit-empty">Please select any Component</div>
    return (
      <div className="edit-bar flex column">
        <h3>Editing <span>{currCmp.type.split('-')[1]}</span></h3>
        <EditCmpStyleList
          style={currCmp.info.style}
          currCmp={currCmp}
          onUpdateCurrCmp={onUpdateCurrCmp}
        />
      </div>
    )
  }
}