import { Box, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

export function EditVideo({ onUpdateCurrCmp, currCmp }) {
  const [state, setState] = useState(currCmp);
  const onSubmit = (ev)=>{
      ev.preventDefault();
      onUpdateCurrCmp(state);
  }
  const handleChange = ({ target }) => {
    const value = target.value;
    setState({ ...state, info: { ...state.info, url: value } });
  };
  return (
    <Box display="flex" alignItems="flex-start" flexDirection="column">
      <Box display="flex">
        <Typography>Video Search</Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          onChange={handleChange}
          value={state.info.url}
          variant="outlined"
        />
      </form>
    </Box>
  );
}
