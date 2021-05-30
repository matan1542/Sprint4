// import {WapTxt} from '../WapCmps/WapTxt'
import { cmpService } from '../../../services/cmp.service.js'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export function AddCmpBar({ addCmp, changeCmpsIds, currWap }) {
    const onAddCmp = async ({ target }) => {
        const value = target.attributes.value.value;
        const res = await cmpService.getCmpsById(value)
        console.log('res', res)
        const cmp = await changeCmpsIds(res);
        console.log("🚀 ~ file: AddCmpBar.jsx ~ line 10 ~ onAddCmp ~ cmp", cmp)
        await addCmp(currWap, cmp)
    }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div value='wc01' onClick={onAddCmp}>Header</div>
                {/* <li value='wc05' onClick={onAddCmp}>Hero</li>
                <li value='wc023' onClick={onAddCmp}>Form</li> */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div value='wc05' onClick={onAddCmp}>Hero</div>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <div value='wc023' onClick={onAddCmp}>Form</div>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

{/* <li value='wc023' onClick={onAddCmp}>Form</li> */}
