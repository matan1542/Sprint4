import { useEffect, useRef, useState } from "react";

export const EditTxt = ({ cmp, onUpdateCurrCmp, onCmpFocus, onUpdateWap }) => {
  const [state, setState] = useState(cmp);
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
    } else {

      onUpdateCurrCmp(state);
    }
  }, [state]);

  const handleChange = ({ target }) => {
    const field = target.attributes.name.value
    const value = target.innerText
    setState(state => ({
      ...state,
      info: {
        ...state.info,
        [field]: value
      }
    }))
  };
  return (
    <>
      <p
        onKeyUp={handleChange}
        onBlur={({ target }) => {
          target.contentEditable = false;
          onUpdateWap();
        }}
        suppressContentEditableWarning={true}
        onClick={(ev) => {
          onCmpFocus(ev, cmp);
          ev.target.contentEditable = true;
          ev.target.onFocus = true;
        }}
        className="wap-text"
        name="txt"
        style={cmp.info.style}>
        {state.info.txt}
      </p>
    </>
  );
};
