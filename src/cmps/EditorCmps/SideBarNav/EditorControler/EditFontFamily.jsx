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

export function EditFontFamily({val ,onUpdateCurrCmp ,currCmp }) {
  const classes = useStyles();
  const [fontFamily, setFontFamily] = React.useState('');

  const handleChange = async(event) => {
    const value = event.target.value;
    const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style,fontFamily:`${value}`}}}
    await onUpdateCurrCmp(cmp)
  
    setFontFamily(event.target.value);
  };


  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="center">
        <Grid item>
          <Typography id="input-slider" gutterBottom>
            Font
          </Typography>
        </Grid>
        <Grid item>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Font</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={fontFamily}
              onChange={handleChange}
              label="Font"
              size="small"
            >
              <MenuItem value={val}>{val}</MenuItem>
                <MenuItem value="Ariel">Ariel</MenuItem>
                <MenuItem value="New Time David">New Time David</MenuItem>
                <MenuItem value="roboto">Roboto</MenuItem>
                <MenuItem value="caveat">Caveat</MenuItem>
                <MenuItem value="montserrat_alternates">Montserrat</MenuItem>
                <MenuItem value="amatic_sc">Amatic</MenuItem>
                <MenuItem value="cursive">Cursive</MenuItem>
            
            </Select>
          </FormControl>
          
         </Grid>
      </Grid>
    </div>
  );
}
