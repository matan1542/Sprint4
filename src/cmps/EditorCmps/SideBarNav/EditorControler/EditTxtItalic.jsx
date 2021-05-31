import React from 'react'
import FormatItalicIcon from '@material-ui/icons/FormatItalic'
import { Button } from '@material-ui/core'

export function EditTxtItalic({ onUpdateCurrCmp, currCmp }) {
    const onDecoration = () => {

    }
    return (
        <div className={"txt-decoration flex space-between"}>
            <Button><FormatItalicIcon /></Button>
        </div>
    )
}