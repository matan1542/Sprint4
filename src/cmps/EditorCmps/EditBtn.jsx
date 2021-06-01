import { useEffect, useRef, useState } from "react";

export const EditBtn = ({ cmp, onUpdateCurrCmp, onCmpFocus, onUpdateWap }) => {
  const [state, setState] = useState(cmp);
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
    } else {

      onUpdateCurrCmp(state);
    }
  }, [onUpdateCurrCmp, state]);

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
      <button
        onKeyUp={handleChange}
        onBlur={({ target }) => {
          target.contentEditable = false;
          onUpdateWap();
        }}
        className="wap-btn"
        suppressContentEditableWarning={true}
        onClick={(ev) => {
          onCmpFocus(ev, cmp);
          ev.target.contentEditable = true;
          ev.target.onFocus = true;
        }}
        name="txt"
        style={cmp.info.style}>
        {state.info.txt}
      </button>
    </>
  );
};
