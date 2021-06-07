import React from 'react'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import { Button } from '@material-ui/core'

export function EditTxtBold({ onUpdateCurrCmp, currCmp }) {
    const onToggleStyle = async () => {
        let cmp
        if (currCmp.info.style.fontWeight === '' || currCmp.info.style.fontWeight === 'unset') {
            cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, fontWeight: `bold` } } }
        } else {
            cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, fontWeight: `unset` } } }
        }
        await onUpdateCurrCmp(cmp)
    }
    return (
        <Button onClick={onToggleStyle}>{currCmp.info.style.fontWeight === 'bold' ? <FormatBoldIcon style={{ backgroundColor: 'rgb(230,230,230)', borderRadius: '2px' }} /> : <FormatBoldIcon />}</Button>
    )
}