import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

export function EditAlignContent({val ,onUpdateCurrCmp ,currCmp }) {
  const classes = useStyles();
  const [alignContent, setAlignContent] = React.useState('');

  const handleChange = async(event) => {
    const value = event.target.value;
    const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style,alignContent:`${value}`}}}
    await onUpdateCurrCmp(cmp)
  
    setAlignContent(event.target.value);
  };


  return (
    <div className={classes.root}>
      <Grid container alignContent="start">
        <Box display="flex" alignContent='flex-start' flexDirection='column'>
          <Typography id="input-slider" gutterBottom>
            Align Content
          </Typography>
          
        <Grid item>
          <FormControl variant="outlined" size="small" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">{val}</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={alignContent}
              onChange={handleChange}
              label="alignContent"
              size="small"
            >
                <MenuItem value="unset">None</MenuItem>
                <MenuItem value="center">Center</MenuItem>
                <MenuItem value="flex-start">Begining</MenuItem>
                <MenuItem value="flex-end">End</MenuItem>
              </Select>
          </FormControl>
        </Grid>
        </Box>
      </Grid>
    </div>
  );
}
