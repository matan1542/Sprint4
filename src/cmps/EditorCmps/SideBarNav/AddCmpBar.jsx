// import {WapTxt} from '../WapCmps/WapTxt'
import { cmpService } from '../../../services/cmp.service.js'
export function AddCmpBar({ addCmp, changeCmpsIds, getCmpById, currWap }) {
    const onAddCmp = async ({ target }) => {
        const value = target.attributes.value.value;
        const res = await cmpService.getCmpsById(value)
        console.log('res', res)
        const cmp = await changeCmpsIds(res);
        console.log("🚀 ~ file: AddCmpBar.jsx ~ line 10 ~ onAddCmp ~ cmp", cmp)
        await addCmp(currWap, cmp)
    }

    return (
        <div className="add-bar flex column">
            <ul className="add-cmp-list clean-list flex justify-center column align-text-center">
                <li value='wc01' onClick={onAddCmp}>Header</li>
                <li value='wc05' onClick={onAddCmp}>Hero</li>
            </ul>

        </div>
    )
}