import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export  function EditPadding({attribute,val,onUpdateCurrCmp ,currCmp}) {
  const classes = useStyles();

  const valuetext = (value)=>{
    const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style,[attribute]:`${value}px`}}}
    onUpdateCurrCmp(cmp)
  }

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography>
      <Slider
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        valueLabelDisplay="on"
      />
    </div>
  );
}