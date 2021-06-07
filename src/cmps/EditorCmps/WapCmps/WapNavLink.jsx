/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined"
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { EditorWapCmps } from "../EditorWapCmps";
import { EditTxt } from "../EditTxt";


export function WapNavLink({
  onClickFunc,
  cmp,
  onDeleteCmp,
  onCmpFocus,
  onUpdateCurrCmp,
  onCloneCmp,
  wap,
  updateWap,
  isEdit
}) {

  const onUpdateCmp = (cmpTxt) => {
    cmp.info.txt = cmpTxt
    onUpdateCurrCmp(cmp)

  }
  const redirectPage = (ev)=>{
    ev.preventDefault()
    console.log('target.value',ev.target.value)
    window.location.href = ev.target.value;
}
  if (!isEdit) {
    return (
      <li className="wap-el publish">
        <a value={(cmp.info.action.link) ? cmp.info.action.link : '#'} onClick={redirectPage}>   
          {<EditTxt cmp={cmp}
            isEdit={false}
            element="button"
            type="link"
            url={(cmp.info.action.link) ? cmp.info.action.link : '#'} />}
          {cmp.cmps && (
            <EditorWapCmps
              cmp={cmp}
              wap={wap}
              isEdit={false}
            />
          )}
        </a>
      </li>
    )
  }
  return (
    <li className="wap-el">
      {<EditTxt
        cmp={cmp}
        isEdit={isEdit}
        onUpdateWap={() => { updateWap(wap) }}
        onUpdateCurrCmp={onUpdateCmp}
        onCmpFocus={onCmpFocus}
        element="span" />}
      <div className="wap-el-tool">
              <button
                className="wap-el-btn-del"
                onClick={() => onCloneCmp(cmp, wap)}
              >
                <FileCopyOutlinedIcon />
              </button>
              <button
                className="wap-el-btn-del"
                onClick={() => onDeleteCmp(cmp.id)}
              >
                <DeleteForeverOutlinedIcon />
              </button>
      </div>
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
    </li>
  );
}
