import React from "react";
import { EditTxtUnderLine } from "./EditTxtUnderLine";
import { EditTxtBold } from "./EditTxtBold";
import { EditTxtItalic } from "./EditTxtItalic";

export function EditTextDecoration({ onUpdateCurrCmp, currCmp }) {
  return (
    <div className="text-decoration">
      <EditTxtUnderLine onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
      <EditTxtBold onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
      <EditTxtItalic onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
    </div>
  );
}
