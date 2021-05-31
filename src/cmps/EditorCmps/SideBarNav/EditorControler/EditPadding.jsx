import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
    
  root: {
    width: 200,
    margin:"0 auto"
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export  function EditPadding({att,val,onUpdateCurrCmp ,currCmp}) {
    val = +(val.replace('px',''))
    const [pad,setPadding] = useState(val);
  const classes = useStyles();

  const onHandleChange = async(event, newValue)=>{
    const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style,[att]:`${newValue}px`}}}
      await onUpdateCurrCmp(cmp)
    setPadding(newValue);
  }
//   console.log('att line 26', val)
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        {(att==="paddingInline")? "Side Spacing": "Set Length"}
      </Typography>
      <Slider
        value={pad}
        onChange={onHandleChange}
        aria-labelledby="input-slider"
        valueLabelDisplay="on"
      />
    </div>
  );
}