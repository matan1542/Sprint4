import { DynamicEditCmp } from "./DynamicEditCmp"
import { EditBackgroundImg } from "./EditorControler/EditBackgroundImg"
export function EditCmpStyleList({ style, currCmp, onUpdateCurrCmp }) {
    return (
        <div>
            {currCmp.type === "wap-img" && <EditBackgroundImg onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />}
            {Object.entries(style).map((attribute, idx) => <DynamicEditCmp key={idx}
                attribute={attribute[0]}
                value={attribute[1]}
                currCmp={currCmp}
                onUpdateCurrCmp={onUpdateCurrCmp}
            />)}
        </div>
    )
}