import React from 'react'
import FormatItalicIcon from '@material-ui/icons/FormatItalic'
import { Button } from '@material-ui/core'

export function EditTxtItalic({ onUpdateCurrCmp, currCmp }) {
    const onToggleStyle = async () => {
        let cmp
        if (currCmp.info.style.fontStyle === 'unset' || currCmp.info.style.fontStyle === '') {
            cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, fontStyle: `italic` } } }
        } else {
            cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, fontStyle: `unset` } } }
        }
        await onUpdateCurrCmp(cmp)
    }
    return (
        <Button onClick={onToggleStyle}><FormatItalicIcon /></Button>
    )
}