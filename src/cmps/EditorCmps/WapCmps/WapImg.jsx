

import React from 'react'

import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

export function WapImg({
    wap,
    cmp,
    onDeleteCmp,
    onCmpFocus,
    onCloneCmp,
    onUpdateCurrCmp,
    
    isEdit
}) {
    if (!isEdit) {
        return (
            <div className="wap-el publish">
                <img
                    className="wap-img publish"
                    src={cmp.info.src} style={cmp.info.style} alt="img"
                />
            </div>
        )
    }
    return (
        <div className="wap-el">
            <img onClick={(ev) => {
                onCmpFocus(ev, cmp);
                ev.target.onFocus = true;
            }}
                className="wap-img"
                src={cmp.info.src} style={cmp.info.style} alt="img"
            />
            <div className="wap-el-tool">
          <button className="wap-el-btn-del"  onClick={() => onCloneCmp(cmp, wap)}>
            <FileCopyOutlinedIcon />
          </button>
          
          <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}><DeleteForeverOutlinedIcon /></button>
      </div>
        </div>
    )
}
