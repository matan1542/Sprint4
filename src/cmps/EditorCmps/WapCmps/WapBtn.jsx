import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { EditorWapCmps } from "../EditorWapCmps";
import { EditTxt } from "../EditTxt";


export function WapBtn({
  cmp,
  onDeleteCmp,
  onCmpFocus,
  onUpdateCurrCmp,
  wap,
  updateWap,
  isEdit
}) {

  const onUpdateCmp = (cmpTxt) => {
    cmp.info.txt = cmpTxt
    onUpdateCurrCmp(cmp)

  }
  if (!isEdit) {
    return (
      <div className="wap-el publish">
        {<EditTxt cmp={cmp}
          isEdit={false}
          element="button" />}
        {cmp.cmps && (
          <EditorWapCmps
            cmp={cmp}
            wap={wap}
            isEdit={false}
          />
        )}
      </div>
    )
  }
  return (
    <div className="wap-el">
      {<EditTxt
        cmp={cmp}
        isEdit={isEdit}
        onUpdateWap={() => { updateWap(wap) }}
        onUpdateCurrCmp={onUpdateCmp}
        onCmpFocus={onCmpFocus}
        element="span" />}
      <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}>
        <DeleteForeverOutlinedIcon />
      </button>
      {cmp.cmps && (
        <EditorWapCmps
          cmp={cmp}
          wap={wap}
          isEdit={isEdit}
          updateWap={updateWap}
          onCmpFocus={onCmpFocus}
          onUpdateCurrCmp={onUpdateCurrCmp}
          onDeleteCmp={onDeleteCmp}
        />
      )}
    </div>
  );
}
