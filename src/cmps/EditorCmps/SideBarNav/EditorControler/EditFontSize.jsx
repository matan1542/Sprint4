import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import TextFormatIcon from '@material-ui/icons/TextFormat';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export function EditFontSize({val, onUpdateCurrCmp,currCmp}) {
  val = +(val.replace('px',''))
  const classes = useStyles();
  const [value, setValue] = React.useState(val);

useEffect(() => {
  setValue(val)
}, [val])
  const handleSliderChange = async(event, newValue) => {
  const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style,fontSize:`${newValue}px`}}}
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
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="center">
        <Typography id="input-slider" gutterBottom>
            Text Size
        </Typography>
        <Grid item>
          <TextFormatIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            min={0}
            step={1}
            max={100}
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
              step: 30,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}