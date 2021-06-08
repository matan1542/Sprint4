import { TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'

export function EditNavLink({ cmp, onUpdateCurrCmp }) {
    const linkToEdit = {
        link: cmp.info.action.link
    }
    const [urlState, setUrl] = useState(linkToEdit)

    useEffect(() => {
        onEditUrl()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlState])

    const onEditUrl = () => {
        const cmpToUpdate = { ...cmp }
        cmpToUpdate.info.action.link = urlState.link
        onUpdateCurrCmp(cmpToUpdate)
    }
    

    return (
        <div className="edit-link">
            <TextField label="add link"
                value={urlState.link}
                onChange={({ target }) => setUrl({ link: target.value })} />
        </div>
    )
}
