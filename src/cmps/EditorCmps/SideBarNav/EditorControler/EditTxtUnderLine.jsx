import React from 'react'
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined'
import { Button } from '@material-ui/core'

export function EditTxtUnderLine({ onUpdateCurrCmp, currCmp }) {
    return (
        <div className={"txt-decoration flex space-between"}>
            <Button><FormatUnderlinedIcon /></Button>
        </div>
    )
}
