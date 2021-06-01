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
    const sections = ['Header', 'Section', 'Hero', 'Footer', 'Form', 'Video']

    return (
        <div className={classes.root}>
            <Droppable droppableId="2" isCombineEnabled>
                {(provided, snapshot) => (
                    <div className="add-bar flex column"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {sections.map((section, idx) => {
                            return (
                                <Accordion expanded={expanded === `panel${idx}a`} onChange={handleChange(`panel${idx}a`)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${idx}a-content`}
                                        id={`panel${idx}a-header`}
                                    >
                                        <Typography className={classes.heading}>{section}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <AddCmpList cmps={cmps} sectionType={`${section}-section`} />
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}
