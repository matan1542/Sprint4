import React from 'react'
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined'
import { Button } from '@material-ui/core'

export function EditTxtUnderLine({ onUpdateCurrCmp, currCmp }) {
    const onToggleStyle = async () => {
        let cmp
        if (currCmp.info.style.textDecoration === 'unset') {
            cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, textDecoration: `underline` } } }
        } else {
            cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, textDecoration: `unset` } } }
        }
        await onUpdateCurrCmp(cmp)
    }
    return (
        <span className={"txt-decoration"}>
            <Button onClick={onToggleStyle}><FormatUnderlinedIcon /></Button>
        </span>
    )
}
