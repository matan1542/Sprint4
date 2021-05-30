import { DynamicEditCmp } from "./DynamicEditCmp"

export function EditCmpStyleList({ style, currCmp, onUpdateCurrCmp }) {
    // console.log('Element style:', style)
    return (
        <div>
            {Object.entries(style).map((attribute, idx) => <DynamicEditCmp key={idx}
                attribute={attribute[0]}
                value={attribute[1]}
                currCmp={currCmp}
                onUpdateCurrCmp={onUpdateCurrCmp}
            />)}
        </div>
    )
}