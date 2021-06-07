import { useState } from "react";
import React from 'react'

export const EditTxt = ({ cmp, onUpdateCurrCmp, onCmpFocus,url, onUpdateWap,type, element, isEdit }) => {
  const [cmpTxt, setCmpTxt] = useState(cmp.info.txt);


  const handleChange = ({ target }) => {
    const value = target.innerText
    setCmpTxt(value)
  }
  return (
    !isEdit ?
      <>

        {React.createElement(element, {
          className: "wap-text publish",
         onClick:()=>{
           if(type==='link') window.location.href = 'https://www.google.com'
         },
          name: "txt",
          style: cmp.info.style,
        }, cmp.info.txt)}

      </>

      :

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
  )

};
