import {EditFontSize} from './EditorControler/EditFontSize'
import {EditFontFamily} from './EditorControler/EditFontFamily'
import {EditColor} from './EditorControler/EditColor'

export  function DynamicEditCmp({attribute, value, currCmp, onUpdateCurrCmp}) {
    switch (attribute) {
        case "fontSize":
            return <EditFontSize val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>
        case "fontFamily": 
            return <EditFontFamily val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>
        case "color": 
            return <EditColor att={attribute} val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>            
        case "backgroundColor": 
            return <EditColor att={attribute} val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>            
        // case "fontFamily": 
        //     return <EditFontFamily val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>
        // case "fontFamily": 
        //     return <EditFontFamily val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>
        default : return null    
    }
}

