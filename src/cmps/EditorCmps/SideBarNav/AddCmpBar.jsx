// import {WapTxt} from '../WapCmps/WapTxt'
// import { cmpService } from '../../../services/cmp.service.js'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddCmpList } from './AddCmpList'
import { Droppable } from 'react-beautiful-dnd';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export function AddCmpBar({ addCmp, changeCmpsIds, currWap, cmps }) {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Droppable droppableId="2" isCombineEnabled>
                {(provided, snapshot) => (
                    <div className="add-bar flex column"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <Accordion disableSpacing={true} expanded={expanded === 'panel1a'} onChange={handleChange('panel1a')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Headers</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AddCmpList cmps={cmps} sectionType="header-section" />
                                {/* <li value='wc05' onClick={onAddCmp}>Hero</li>
                <li value='wc023' onClick={onAddCmp}>Form</li> */}
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2a'} onChange={handleChange('panel2a')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Heros</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AddCmpList cmps={cmps} sectionType="hero-section" />
                            </AccordionDetails>
                        </Accordion>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}
