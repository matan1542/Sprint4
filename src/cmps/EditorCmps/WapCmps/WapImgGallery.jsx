import React from 'react'
import { WapImg } from './WapImg'

export function WapImgGallery({ cmp,
    onDeleteCmp,
    onCmpFocus,
    onCloneCmp,
    isEdit }) {
    if (!isEdit) {
        return (
            <>
                { cmp.cmps.map((cmp, idx) => {
                    return <WapImg key={idx} cmp={cmp}
                        isEdit={isEdit} />
                })}
            </>
        )
    }
    const parentId = cmp.id
    return (
        <>
            {cmp.cmps.map((cmp, idx) => {
                cmp.idx = idx
                cmp.parentId = parentId
                return <WapImg key={idx} cmp={cmp}
                    onDeleteCmp={onDeleteCmp}
                    onCloneCmp={onCloneCmp}
                    onCmpFocus={onCmpFocus}
                    isEdit={isEdit} />
            })}
        </>
    )
}


