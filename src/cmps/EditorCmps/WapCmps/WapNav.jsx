import React from "react";
import { EditorWapCmps } from "../EditorWapCmps";

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export function WapNav({ onClickFunc, cmp, wap, onDeleteCmp, onCmpFocus, onUpdateCurrCmp, updateWap }) {
  return (
    <nav className="wap-section flex w-75" 
      onClick={(ev) => onCmpFocus(ev, cmp)}
      style={cmp.info.style}>
      {cmp.cmps && <EditorWapCmps cmp={cmp} wap={wap} updateWap={updateWap} onCmpFocus={onCmpFocus} onUpdateCurrCmp={onUpdateCurrCmp} onDeleteCmp={onDeleteCmp} />}
      <div className="wap-section-tool">
        <button className="wap-el-btn-edit" onClick={() => console.log('edit')}><EditOutlinedIcon /></button>
        <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}><DeleteForeverOutlinedIcon /></button>
      </div>
    </nav>
  );
}
