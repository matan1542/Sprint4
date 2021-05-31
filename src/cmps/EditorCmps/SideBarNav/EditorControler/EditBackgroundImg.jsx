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
    },
    img: {
        objectFit: 'cover',
        marginBottom: 10
    }
})

export function EditBackgroundImg({ onUpdateCurrCmp, currCmp }) {
    const classes = useStyle()
    const file = {
        file: null
    }
    const searchFile = {
        imgs: []
    }
    const loading = {
        isLoding: false
    }

    const [loadingState, setLoading] = useState(loading)
    const [fileState, setFile] = useState(file)
    const [searchState, setSearch] = useState(searchFile)

    // useEffect(() => {
    //     console.log('!!!!!!');
    //     _.debounce(fileToSearch(searchState.term), 500)
    // }, [searchState])

    const fileToSearch = async ({ target }) => {
        setLoading({ isLoding: true })
        const imgs = await suggestImgs(target.value)
        setSearch({ ...searchState, imgs })
        setLoading({ isLoding: false })
    }

    const onSubmitForm = async (ev) => {
        ev.preventDefault()
        if (!fileState.file) return
        setLoading({ isLoding: true })
        const url = await uploadImg(fileState.file)
        const cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, backgroundImage: `url(${url})` } } }
        await onUpdateCurrCmp(cmp)
        setLoading({ isLoding: false })
    }

    const removeBackgroundImg = async () => {
        const cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, backgroundImage: `url()` } } }
        await onUpdateCurrCmp(cmp)
        setFile({ file: null })
    }

    const onSelectPhoto = async (url) => {
        setLoading({ isLoding: true })
        const cmp = { ...currCmp, info: { ...currCmp.info, style: { ...currCmp.info.style, backgroundImage: `url(${url})` } } }
        await onUpdateCurrCmp(cmp)
        setLoading({ isLoding: false })
    }

    return (
        <>
            <form onSubmit={onSubmitForm} className={classes.btnGroup}>
                {loadingState.isLoding && <small>loading...</small>}
                <ButtonGroup size="small" variant="text" color="inherit" aria-label="text primary button group">
                    <Button component="label">
                        Upload Image
                    <input
                            type="file"
                            onChange={({ target }) => setFile({ file: target.files[0] })}
                            hidden
                        />
                    </Button>
                    <Button type="submit">Save image</Button>
                    <Button type="button" onClick={removeBackgroundImg}>Remove image</Button>
                </ButtonGroup>
            </form>
            <TextField label="Type to search" id="standard-basic"
                className={classes.btnGroup}
                value={searchState.term}
                onChange={_.debounce(fileToSearch, 500)} />

            {searchState.imgs.length > 0 &&
                <div className="flex column">
                    {searchState.imgs.map(img => <img key={img.url} className='img-sample mb-2' src={img.url} onClick={() => onSelectPhoto(img.url)} />)}
                </div>
            }

        </>
    )
}
