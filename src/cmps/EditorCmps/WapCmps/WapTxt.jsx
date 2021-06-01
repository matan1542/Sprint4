import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { EditorWapCmps } from "../EditorWapCmps";
import { EditTxt } from "../EditTxt";

// const _ = require("lodash");

export function WapTxt({
  cmp,
  onCmpFocus,
  onUpdateCurrCmp,
  onDeleteCmp,
  updateWap,
  wap,
}) {


  const onUpdateCmp = (cmpTxt) => {
    console.log(cmpTxt);
    cmp.info.txt = cmpTxt
    onUpdateCurrCmp(cmp)

  }

  return (
    <div className="wap-el">
      <EditTxt
        element="pre"
        cmp={cmp}
        onUpdateWap={() => { updateWap(wap) }}
        onUpdateCurrCmp={onUpdateCmp}
        onCmpFocus={onCmpFocus}
      />
      {cmp.cmps && (
        <EditorWapCmps
          cmp={cmp}
          wap={wap}
          updateWap={updateWap}
          onCmpFocus={onCmpFocus}
          onUpdateCurrCmp={onUpdateCurrCmp}
          onDeleteCmp={onDeleteCmp}
        />
      )}
      <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}>
        <DeleteForeverOutlinedIcon />
      </button>
    </div>
  );
}
