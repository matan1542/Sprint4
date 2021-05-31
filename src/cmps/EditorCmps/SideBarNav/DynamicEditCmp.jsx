import {EditFontSize} from './EditorControler/EditFontSize'
import {EditLetterSpacing} from './EditorControler/EditLetterSpacing'
import {EditFontFamily} from './EditorControler/EditFontFamily'
import {EditColor} from './EditorControler/EditColor'
import {EditFlexDirection} from './EditorControler/EditFlexDirection'

export  function DynamicEditCmp({attribute, value, currCmp, onUpdateCurrCmp}) {
    // console.log(attribute, value);
    switch (attribute) {
        case "fontSize":
            return <EditFontSize val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>
        case "fontFamily": 
            return <EditFontFamily val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>
        case "color": 
            return <EditColor att={attribute} val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>            
        case "backgroundColor": 
            return <EditColor att={attribute} val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>            
        case "letterSpacing": 
            return <EditLetterSpacing val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>
        case "flexDirection": 
            return <EditFlexDirection val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>
        default : return null    
    }
}

