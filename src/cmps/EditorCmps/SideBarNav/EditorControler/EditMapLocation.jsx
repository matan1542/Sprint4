import { Box, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import {getLocationByVal} from "../../../../services/map.service.js"

export function EditMapLocation({ onUpdateCurrCmp, currCmp }) {
  const [state, setState] = useState();
  const onSubmit = async(ev)=>{
    ev.preventDefault()
   const res = await getLocationByVal(state)
   const lat = res[0].geometry.location.lat;
   const lng = res[0].geometry.location.lng;
   const cmp = {...currCmp,info:{...currCmp.info,lat,lng}}
      onUpdateCurrCmp(cmp);
  }
  const handleChange = ({ target }) => {
    const value = target.value;
    setState({value});
  };

  return (
    <Box display="flex" alignItems="flex-start" flexDirection="column">
      <Box display="flex">
        <Typography>Search location</Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label="Search"
          onChange={handleChange}
          variant="outlined"/>
      </form>
    </Box>
  );
}
