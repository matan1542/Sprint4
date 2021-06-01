import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// import Input from '@material-ui/core/Input';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';

const useStyles = makeStyles({
  root: {
    width: 200,
  }
});

export function EditWidth({ val, onUpdateCurrCmp, currCmp }) {
  val = +(val.replace('px', ''))
  const classes = useStyles();
  const [value, setValue] = React.useState(val);

  useEffect(() => {
    setValue(val)
  }, [val])
  const handleSliderChange = async (event, newValue) => {
    const cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, width: `${newValue}px` } } }
    await onUpdateCurrCmp(cmp)
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <Grid container spacing={1} alignItems="center">
        <Typography id="input-slider" gutterBottom>
          Size
        </Typography>
        <Grid item>
          <CropOriginalIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            min={0}
            step={1}
            max={600}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
    </div>
  );
}