import React from "react";
import { EditorWapCmps } from "../EditorWapCmps";

export function WapNav({ onClickFunc, cmp,wap, onDeleteCmp, onCmpFocus ,onUpdateCurrCmp,updateWap}) {
  // console.log('cmp',cmp)
  return (
    <nav className="flex space-between w-75">
      {cmp.cmps && <EditorWapCmps cmp={cmp} wap={wap} updateWap={updateWap} onCmpFocus={onCmpFocus} onUpdateCurrCmp={onUpdateCurrCmp} onDeleteCmp={onDeleteCmp} />}
    </nav>
  );
}
