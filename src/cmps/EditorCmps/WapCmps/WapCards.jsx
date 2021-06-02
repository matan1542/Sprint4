import React from 'react'
import { EditorWapCmps } from "../EditorWapCmps";

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export function WapCard({
    onClickFunc,
    cmp,
    onDeleteCmp,
    onCmpFocus,
    onUpdateCurrCmp,
    wap,
    updateWap,
    isEdit
}) {
    if (isEdit) {
        <div className="wap-section wap-card publish" style={cmp.info.style}>
            {cmp.cmps && <EditorWapCmps cmp={cmp} wap={wap} isEdit={isEdit} />}
        </div>
    }
    return (
        <div className="wap-section wap-card"
            onClick={(ev) => onCmpFocus(ev, cmp)}
            style={cmp.info.style}>
            {cmp.cmps && <EditorWapCmps cmp={cmp} wap={wap} isEdit={isEdit} updateWap={updateWap} onCmpFocus={onCmpFocus} onUpdateCurrCmp={onUpdateCurrCmp} onDeleteCmp={onDeleteCmp} />}
            <div className="wap-section-tool">
                <button className="wap-el-btn-edit" onClick={() => console.log('edit')}><EditOutlinedIcon /></button>
                <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}><DeleteForeverOutlinedIcon /></button>
            </div>
        </div>
    )
}
