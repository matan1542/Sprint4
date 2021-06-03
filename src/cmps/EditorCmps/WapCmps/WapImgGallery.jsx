import React from 'react'
import { WapImg } from './WapImg'

export function WapImgGallery({cmp,
    onDeleteCmp,
    onCmpFocus,
    isEdit})
     {
        console.log('cmpss', cmp)
        if(!isEdit){
            return(
                <ul className="clean-list flex wrap publish">
                { cmp.info.urls.map((url,idx)=>{
                    return <li key={idx}> <WapImg  cmp={cmp}
                    isEdit={isEdit}/></li>
                 })}
              </ul>
            )
        }
    return (
            <ul className="clean-list flex wrap">
                {cmp.cmps.map((cmp,idx)=>{
                    return <li key={idx}><WapImg  cmp={cmp}
                    onDeleteCmp={onDeleteCmp}
                    onCmpFocus={onCmpFocus}
                    isEdit={isEdit}/></li>
                 })}
              </ul> 
    )
}

