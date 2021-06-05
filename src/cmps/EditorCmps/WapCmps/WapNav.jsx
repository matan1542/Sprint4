import React from "react";
import { EditorWapCmps } from "../EditorWapCmps";

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export function WapNav({ onClickFunc, cmp, wap, onDeleteCmp, onCmpFocus, onUpdateCurrCmp, updateWap, isEdit }) {
  if (!isEdit) {
    return (
      <ul className="wap-section wap-nav-menu publish flex w-75"
        style={cmp.info.style}>
        {cmp.cmps && <EditorWapCmps cmp={cmp} wap={wap} isEdit={isEdit} updateWap={updateWap} onCmpFocus={onCmpFocus} onUpdateCurrCmp={onUpdateCurrCmp} onDeleteCmp={onDeleteCmp} />}
      </ul>
    )
  }
  return (
    <ul className="wap-section wap-nav-menu flex w-75"
      onClick={(ev) => onCmpFocus(ev, cmp)}
      style={cmp.info.style}>
      {cmp.cmps && <EditorWapCmps cmp={cmp} wap={wap} isEdit={isEdit} updateWap={updateWap} onCmpFocus={onCmpFocus} onUpdateCurrCmp={onUpdateCurrCmp} onDeleteCmp={onDeleteCmp} />}
      <div className="wap-section-tool">
        <button className="wap-el-btn-edit" onClick={(ev) => onCmpFocus(ev, cmp)}><EditOutlinedIcon /></button>
        <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}><DeleteForeverOutlinedIcon /></button>
      </div>
    </ul>
  );
}
