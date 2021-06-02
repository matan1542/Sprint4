import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { EditorWapCmps } from "../EditorWapCmps";
import { EditTxt } from "../EditTxt";


export function WapBtn({
  onClickFunc,
  cmp,
  onDeleteCmp,
  onCmpFocus,
  onUpdateCurrCmp,
  wap,
  updateWap,
}) {

  const onUpdateCmp = (cmpTxt) => {
    console.log(cmpTxt);
    cmp.info.txt = cmpTxt
    onUpdateCurrCmp(cmp)

  }
  if (!wap.isEdit) {
    return (
      <div className="wap-el publish">
        {<EditTxt cmp={cmp}
          isEdit={false}
          element="button" />}
        {cmp.cmps && (
          <EditorWapCmps
            cmp={cmp}
            wap={wap}
          />
        )}
      </div>
    )
  }
  return (
    <div className="wap-el">
      {<EditTxt cmp={cmp}
        isEdit={true}
        onUpdateWap={() => { updateWap(wap) }}
        onUpdateCurrCmp={onUpdateCmp}
        onCmpFocus={onCmpFocus}
        element="button" />}
      <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}>
        <DeleteForeverOutlinedIcon />
      </button>
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
    </div>
  );
}
