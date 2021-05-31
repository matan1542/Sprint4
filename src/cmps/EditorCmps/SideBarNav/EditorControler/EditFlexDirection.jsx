import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function EditFlexDirection({val ,onUpdateCurrCmp ,currCmp }) {
  const classes = useStyles();
  const [flexDirection, setFlexDirection] = React.useState('');

  const handleChange = async(event) => {
    const value = event.target.value;
    const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style,flexDirection:`${value}`}}}
    await onUpdateCurrCmp(cmp)
  
    setFlexDirection(event.target.value);
  };


  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="center">
        <Grid item>
          <Typography id="input-slider" gutterBottom>
            Direction
          </Typography>
        </Grid>
        <Grid item>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Direction</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={flexDirection}
              onChange={handleChange}
              label="FlexDirection"
              size="small"
            >
              <MenuItem value={val}>{val}</MenuItem>
                <MenuItem value="column"></MenuItem>
                <MenuItem value="column-reverse">Column Reverse</MenuItem>
                <MenuItem value="row">Row</MenuItem>
                <MenuItem value="row-reverse">Row Reverse</MenuItem>            
            </Select>
          </FormControl>
          
         </Grid>
      </Grid>
    </div>
  );
}
