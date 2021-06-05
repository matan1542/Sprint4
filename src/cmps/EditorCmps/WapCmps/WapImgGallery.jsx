import React from 'react'
import { WapImg } from './WapImg'

export function WapImgGallery({ cmp,
    onDeleteCmp,
    onCmpFocus,
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
    return (
        <>
            {cmp.cmps.map((cmp, idx) => {
                return <WapImg key={idx} cmp={cmp}
                    onDeleteCmp={onDeleteCmp}
                    onCmpFocus={onCmpFocus}
                    isEdit={isEdit} />
            })}
        </>
    )
}


