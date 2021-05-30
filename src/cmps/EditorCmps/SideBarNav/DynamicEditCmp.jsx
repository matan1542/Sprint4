import {EditFontSize} from './EditorControler/EditFontSize'
import {EditFontFamily} from './EditorControler/EditFontFamily'

export  function DynamicEditCmp({attribute, value, currCmp, onUpdateCurrCmp}) {
    switch (attribute) {
        case "fontSize":
            return <EditFontSize val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>
        case "fontFamily": 
            return <EditFontFamily val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>
        default : return null    
    }
}

