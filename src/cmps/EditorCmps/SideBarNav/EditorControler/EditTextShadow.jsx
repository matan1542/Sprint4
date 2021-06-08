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
    marginBottom: theme.spacing(0),
    minWidth: 145,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

export function EditTextShadow({ val, onUpdateCurrCmp ,currCmp }) {
  const classes = useStyles();
  const [textShadow, setTextShadow] = React.useState('');

  const handleChange = async(event) => {
    const value = event.target.value;
    const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style,textShadow:`${value}`}}}
    await onUpdateCurrCmp(cmp)
  
    setTextShadow(event.target.value);
  };


  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="center">
      <Box display="flex" alignItems='flex-start' flexDirection='column'>
        <Grid item>
          <Typography id="input-slider" gutterBottom>
            Shadow
          </Typography>
        </Grid>
        <Grid item>
          
          <FormControl variant="outlined" size="small" className={classes.formControl}>
            
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={textShadow}
              onChange={handleChange}
              label="Font"
              size="small"
            >
              <MenuItem value={val}>{val}</MenuItem>
                <MenuItem value="0">None</MenuItem>
                <MenuItem value="rgb(209 201 202) 1px 1px 2px">Light</MenuItem>
                <MenuItem value="rgb(183 176 177) 3px 2px 3px">Medium</MenuItem>
                <MenuItem value="rgb(183 176 177) 5px 5px 3px">Strong</MenuItem>
            </Select>
           
          </FormControl>
         </Grid>
         </Box>
      </Grid>
    </div>
  );
}
