import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// import Input from '@material-ui/core/Input';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 150,
  }
});

export function EditBorderRadius({ val, onUpdateCurrCmp, currCmp }) {
  val = +(val.replace('px', ''))
  const classes = useStyles();
  const [value, setValue] = React.useState(val);

  useEffect(() => {
    setValue(val)
  }, [val])
  const handleSliderChange = async (event, newValue) => {
    const cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, borderRadius: `${newValue}px` } } }
    await onUpdateCurrCmp(cmp)
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
        <Box display='flex' alignItems='flex-start' flexDirection='column'>
        <Typography id="input-slider" >
          Radius
        </Typography>
          <Slider
            value={typeof value === 'number' ? value : 0}
            min={0}
            step={1}
            max={50}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="auto"
          />
        </Box>
    </div>
  );
}