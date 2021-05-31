import { DynamicEditCmp } from "./DynamicEditCmp"

export function EditCmpStyleList({ style, currCmp, onUpdateCurrCmp }) {
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