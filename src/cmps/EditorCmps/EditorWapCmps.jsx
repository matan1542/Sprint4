import React, { Component, Fragment } from "react";
import { DynamicCmps } from "./WapCmps/DynamicCmps";

export class EditorWapCmps extends Component {
    
  render() {
    const { cmp,wap, onCmpFocus, onDeleteCmp, onUpdateCurrCmp ,updateWap} = this.props;

    return (
      <Fragment>
        {cmp.cmps.map((cmp, idx) => {
          return (
            <div className="cmp" key={cmp.id}>
              <DynamicCmps
                key={cmp.id}
                idx={idx}
                cmp={cmp}
                wap={wap}
                onCmpFocus={onCmpFocus}
                updateWap={updateWap}
                onUpdateCurrCmp={onUpdateCurrCmp}
                onDeleteCmp={onDeleteCmp}
              />
            </div>
          );
        })}
      </Fragment>
    );
  }
}
