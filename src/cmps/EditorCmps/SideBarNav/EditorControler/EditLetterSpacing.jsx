import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export function EditLetterSpacing({val, onUpdateCurrCmp,currCmp}) {
  val = +(val.replace('px',''))
  const classes = useStyles();
  const [value, setValue] = React.useState(val);

useEffect(() => {
  setValue(val)
}, [val])
  const handleSliderChange = async(event, newValue) => {
  const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style,letterSpacing:`${newValue}px`}}}
   await onUpdateCurrCmp(cmp)
    setValue(newValue);
  };

  const handleInputChange = async(event) => {
    const fontValue = !event.target.value ? 0 : Number(event.target.value)
  const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style,fontSize:`${fontValue}px`}}}
   await onUpdateCurrCmp(cmp)
    setValue(fontValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 40) {
      setValue(40);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="center">
        <Typography id="input-slider" gutterBottom>
            Letter Spacing
        </Typography>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            min={0}
            step={1}
            max={40}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 40,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}