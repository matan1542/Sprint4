import React from 'react'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import { Box, Typography } from '@material-ui/core';

export  function EditAlignText({currCmp,att,onUpdateCurrCmp}) {

    const handleChange = async(align)=>{
        // console.log('att',att)
        const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style,[att]:align}}}
       await onUpdateCurrCmp(cmp)
    }
    return (
        <div>
            <Box display="flex" alignItems="center" >
                <Typography>
                    Text align
                </Typography>
                <Box display="flex" ml={1}  width={110} justifyContent="space-between">
                <FormatAlignLeftIcon  onClick={()=>handleChange('start')}/>
                <FormatAlignJustifyIcon  onClick={()=>handleChange('center')}/>
                <FormatAlignRightIcon  onClick={()=>handleChange('end')}/>
                </Box>
            </Box>
            
        </div>
    )
}
