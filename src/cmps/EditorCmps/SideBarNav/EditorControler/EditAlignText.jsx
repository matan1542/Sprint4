import React from 'react'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import { Box, Typography } from '@material-ui/core';

export function EditAlignText({ currCmp, att, onUpdateCurrCmp }) {

    const handleChange = async (align) => {
        const cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, [att]: align } } }
        await onUpdateCurrCmp(cmp)
    }
    const val = currCmp.info.style[att]
    return (
        <div>
            <Box display="flex" alignItems="center" >
                <Typography>
                    Text align
                </Typography>
                <Box display="flex" ml={1} width={110} justifyContent="space-between">
                    <FormatAlignLeftIcon color={(val === 'start')?"primary":"secondary"} onClick={() => handleChange('start')} />
                    <FormatAlignJustifyIcon color={(val === 'center')?"primary":"secondary"} onClick={() => handleChange('center')} />
                    <FormatAlignRightIcon color={(val === 'end')?"primary":"secondary"} onClick={() => handleChange('end')} />
                </Box>
            </Box>

        </div>
    )
}
