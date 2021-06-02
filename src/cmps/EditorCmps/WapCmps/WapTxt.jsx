import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { EditorWapCmps } from "../EditorWapCmps";
import { EditTxt } from "../EditTxt";

export function WapTxt({
  cmp,
  onCmpFocus,
  onUpdateCurrCmp,
  onDeleteCmp,
  updateWap,
  wap,
  isEdit
}) {


  const onUpdateCmp = (cmpTxt) => {
    console.log(cmpTxt);
    cmp.info.txt = cmpTxt
    onUpdateCurrCmp(cmp)

  }
  console.log("🚀 ~ file: WapTxt.jsx ~ line 25 ~ isEdit", isEdit)

  if (!isEdit) {
    return (
      <div className="wap-el">
        <EditTxt
          element="pre"
          cmp={cmp}
          isEdit={isEdit}
        />
        {cmp.cmps && (
          <EditorWapCmps
            cmp={cmp}
            wap={wap}
            isEdit={isEdit}
          />
        )}

      </div>
    );
  }

  return (
    <div className="wap-el">
      <EditTxt
        element="pre"
        cmp={cmp}
        onUpdateWap={() => { updateWap(wap) }}
        onUpdateCurrCmp={onUpdateCmp}
        onCmpFocus={onCmpFocus}
        isEdit={isEdit}
      />
      {cmp.cmps && (
        <EditorWapCmps
          cmp={cmp}
          wap={wap}
          updateWap={updateWap}
          onCmpFocus={onCmpFocus}
          onUpdateCurrCmp={onUpdateCurrCmp}
          onDeleteCmp={onDeleteCmp}
          isEdit={isEdit}
        />
      )}
      <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}>
        <DeleteForeverOutlinedIcon />
      </button>
    </div>
  );
}
