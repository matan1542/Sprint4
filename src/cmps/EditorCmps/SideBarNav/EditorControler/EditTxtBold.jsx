import React from 'react'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import { Button } from '@material-ui/core'

export function EditTxtBold({ onUpdateCurrCmp, currCmp }) {
    return (
        <div className={"txt-decoration flex space-between"}>
            <Button><FormatBoldIcon /></Button>
        </div>
    )
}