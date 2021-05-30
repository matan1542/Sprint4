import React, { useEffect, useRef, useState } from "react";
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
  // console.log('cmp.info.style:', cmp.info.style)
  return (
    <div className="wap-el">
      <EditTxt
        cmp={cmp}
        onUpdateWap={() => {
          updateWap(wap);
          console.log('wap', wap)
        }}
        onUpdateCurrCmp={onUpdateCurrCmp}
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
