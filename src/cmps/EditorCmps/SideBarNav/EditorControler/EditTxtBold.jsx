import React from 'react'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import { Button } from '@material-ui/core'

export function EditTxtBold({ onUpdateCurrCmp, currCmp }) {
    const onToggleStyle = async () => {
        let cmp
        if (currCmp.info.style.fontWeight === 'unset') {
            cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, fontWeight: `bold` } } }
        } else {
            cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, fontWeight: `unset` } } }
        }
        await onUpdateCurrCmp(cmp)
    }
    return (
        <div className={"txt-decoration flex space-between"}>
            <Button onClick={onToggleStyle}><FormatBoldIcon /></Button>
        </div>
    )
}