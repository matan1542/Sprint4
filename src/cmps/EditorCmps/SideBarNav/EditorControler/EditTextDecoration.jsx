import React from "react";
import { EditTxtUnderLine } from "./EditTxtUnderLine";
import { EditTxtBold } from "./EditTxtBold";
import { EditTxtItalic } from "./EditTxtItalic";
import { Box, Typography } from "@material-ui/core";

export function EditTextDecoration({ onUpdateCurrCmp, currCmp }) {
  return (
    <div className="text-decoration">
      <Box display="flex" alignItems='flex-start' flexDirection='column'>
        <Typography>
          Text Decoration
        </Typography>
        <Box display="flex">
      <EditTxtUnderLine onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
      <EditTxtBold onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
      <EditTxtItalic onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
      </Box>
      </Box>
    </div>
  );
}
