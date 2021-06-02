import { useState } from "react";
import React from 'react'

export const EditTxt = ({ cmp, onUpdateCurrCmp, onCmpFocus, onUpdateWap, element, isEdit }) => {
  const [cmpTxt, setCmpTxt] = useState(cmp.info.txt);


  const handleChange = ({ target }) => {
    //const field = target.attributes.name.value
    const value = target.innerText
    setCmpTxt(value)
  }
  if (!isEdit) {
    return (
      <>
        {React.createElement(element, {
          className: "wap-text publish",
          name: "txt",
          style: cmp.info.style,
        }, cmp.info.txt)}
      </>
    )
  }
  return (
    <>
      {React.createElement(element, {
        onKeyUp: handleChange,
        onBlur: ({ target }) => {
          target.contentEditable = false;
          onUpdateCurrCmp(cmpTxt);
          // onUpdateWap();
        },
        suppressContentEditableWarning: true,
        onClick: (ev) => {
          onCmpFocus(ev, cmp);
          ev.target.contentEditable = true;
          ev.target.onFocus = true;
        },
        className: "wap-text",
        name: "txt",
        style: cmp.info.style,

      }, cmp.info.txt)}
    </>
  );
};
