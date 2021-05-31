import { uploadImg } from '../../../../services/cloudinery.service.js'


import { Button, ButtonGroup } from '@material-ui/core'
import { AttachFile } from '@material-ui/icons';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import React, { useState } from 'react'


export function EditBackgroundImg({ onUpdateCurrCmp, currCmp }) {
    const file = {
        file: null
    }
    const [fileState, setFile] = useState(file)

    const onSubmitForm = async (ev) => {
        ev.preventDefault()
        if (!fileState.file) return
        const url = await uploadImg(fileState.file)
        const cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, backgroundImage: `url(${url})` } } }
        await onUpdateCurrCmp(cmp)
    }
    return (
        <form onSubmit={onSubmitForm}>
            <span>Upload:</span><ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
                <Button component="label">
                    <AttachFile />
                    <input
                        type="file"
                        onChange={({ target }) => setFile({ file: target.files[0] })}
                        hidden
                    />
                </Button>
                <Button type="submit"><CloudUploadIcon /></Button>
            </ButtonGroup>
        </form>
    )
}
