import React from "react";
import { EditorWapCmps } from "../EditorWapCmps";

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export function WapNav({ onClickFunc, cmp, wap, onDeleteCmp, onCloneCmp, onCmpFocus, onUpdateCurrCmp, updateWap, isEdit }) {
  if (!isEdit) {
    return (
      <div className="flex align-center column w-100">    
        <input className="wap-nav-menu-btn" type="checkbox" id="wap-nav-menu-btn" />
        <label className="wap-nav-menu-icon" htmlFor="wap-nav-menu-btn"><span className="navicon"></span></label>      
        <ul className="wap-section wap-nav-menu publish flex"
          style={cmp.info.style}>
          {cmp.cmps && <EditorWapCmps cmp={cmp} wap={wap} isEdit={isEdit} updateWap={updateWap} onCmpFocus={onCmpFocus} onUpdateCurrCmp={onUpdateCurrCmp} onDeleteCmp={onDeleteCmp} />}
        </ul>
      </div>
    )
  }
  return (
    <ul className="wap-section wap-nav-menu flex"
      onClick={(ev) => onCmpFocus(ev, cmp)}
      style={cmp.info.style}>
      {cmp.cmps && <EditorWapCmps cmp={cmp} wap={wap} isEdit={isEdit} updateWap={updateWap} onCmpFocus={onCmpFocus} onUpdateCurrCmp={onUpdateCurrCmp} onCloneCmp={onCloneCmp} onDeleteCmp={onDeleteCmp} />}
      <div className="wap-section-tool">
        <button className="wap-el-btn-edit" onClick={(ev) => onCmpFocus(ev, cmp)}><EditOutlinedIcon /></button>
        <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}><DeleteForeverOutlinedIcon /></button>
      </div>
    </ul>
  );
}
