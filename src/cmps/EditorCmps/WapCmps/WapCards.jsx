

import React from 'react'
import { EditorWapCmps } from "../EditorWapCmps";

export function WapCards({ 
    onClickFunc,
    cmp,
    onDeleteCmp,
    onCmpFocus,
    onUpdateCurrCmp,
    wap,
    updateWap
  }) {
    return (
        <div className="wap-cards flex">
            {cmp.cmps && <EditorWapCmps cmp={cmp} wap={wap} updateWap={updateWap} onCmpFocus={onCmpFocus} onUpdateCurrCmp={onUpdateCurrCmp} onDeleteCmp={onDeleteCmp} />}
        </div>
    )
}
