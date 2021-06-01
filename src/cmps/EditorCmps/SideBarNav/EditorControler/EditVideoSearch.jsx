import { Box, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {getVideos} from "../../../../services/video.service.js"

export function EditVideoSearch({ onUpdateCurrCmp, currCmp }) {
  const onSubmit = async(ev)=>{
   ev.preventDefault();
   const res = await getVideos(ev.target.value)
   const videoId = res.items[0].id.videoId;
   const url = `https://www.youtube.com/watch?v=${videoId}`
   const cmp = {...currCmp,info:{...currCmp.info,url}}
      onUpdateCurrCmp(cmp);
  }

  return (
    <Box display="flex" alignItems="flex-start" flexDirection="column">
      <Box display="flex">
        <Typography>Video Search</Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"/>
      </form>
    </Box>
  );
}
