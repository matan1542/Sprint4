import { Component } from "react";

import { EditCmpStyleList } from "./EditCmpStyleList"

export class EditCmpBar extends Component {
  render() {
    const { currCmp, onUpdateCurrCmp } = this.props
    if (!currCmp?.info) return <div>Please select any Component</div>
    return (
      <div className="edit-bar flex column">
        <EditCmpStyleList
          style={currCmp.info.style}
          currCmp={currCmp}
          onUpdateCurrCmp={onUpdateCurrCmp}
        />
      </div>
    )
  }
}