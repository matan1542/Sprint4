import { uploadImg } from '../../../../services/cloudinery.service.js'
import { suggestImgs } from '../../../../services/search.imgs.service.js'

import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const _ = require("lodash");

const useStyle = makeStyles({
    btnGroup: {
        marginBottom: 10
    }
})

export function EditBackgroundImg({ onUpdateCurrCmp, currCmp }) {
    const classes = useStyle()
    const file = {
        file: null
    }
    const searchFile = {
        term: null,
        imgs: []
    }
    const [fileState, setFile] = useState(file)
    const [searchState, setSearch] = useState(searchFile)

    useEffect(() => {
        const fileToSearch = (file) => {
            console.log('useEffect');
        }
    }, [searchState])

    const onSubmitForm = async (ev) => {
        ev.preventDefault()
        if (!fileState.file) return
        const url = await uploadImg(fileState.file)
        const cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, backgroundImage: `url(${url})` } } }
        await onUpdateCurrCmp(cmp)
    }

    const removeBackgroundImg = async () => {
        const cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, backgroundImage: `url()` } } }
        await onUpdateCurrCmp(cmp)
        setFile({ file: null })
    }
    return (
        <>
            <form onSubmit={onSubmitForm} className={classes.btnGroup}>
                <ButtonGroup size="small" variant="text" color="inherit" aria-label="text primary button group">
                    <Button component="label">
                        Upload Image
                    <input
                            type="file"
                            onChange={({ target }) => setFile({ file: target.files[0] })}
                            hidden
                        />
                    </Button>
                    <Button type="button" onClick={removeBackgroundImg}>Remove image</Button>
                    <Button type="submit">Save image</Button>
                </ButtonGroup>
            </form>
            <TextField label="Type to search" id="standard-basic"
                className={classes.btnGroup}
                value={searchState.term}
                onChange={({ target }) => setSearch({ ...searchState, term: target.value })} />

        </>
    )
}
