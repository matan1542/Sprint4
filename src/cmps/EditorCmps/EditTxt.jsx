import { useEffect, useRef, useState } from "react";

export const EditTxt = ({ cmp, onUpdateCurrCmp, onCmpFocus, onUpdateWap }) => {
  const [txtToEdit, setTxtToEdit] = useState(cmp.info.txt);
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
    } else {
      onUpdateCurrCmp(cmp);
    }
  }, [txtToEdit]);

  const handleChange = ({ target }) => {
    setTxtToEdit(target.innerText);
  };
  console.log('txtToEdit', txtToEdit);
  return (
    <>
      <p
        onKeyUp={handleChange}
        onBlur={({ target }) => {
          target.contentEditable = false;
          onUpdateWap();
        }}
        suppressContentEditableWarning={true}
        onClick={({ target }) => {
          onCmpFocus(cmp, target);
          target.contentEditable = true;
          target.onFocus = true;
        }}
        className="wap-text"
        name="txt"
        style={cmp.info.style}>
        {txtToEdit}
      </p>
    </>
  );
};
