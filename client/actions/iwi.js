import { getIwi } from '../apis/iwi'




export function saveAllIwi(iwiArr) {

    return {
        type: 'SAVE_IWI',
        iwi: iwiArr
    }
}

export function saveArea(iwiArr) {
    console.log(iwiArr)
    return {
        type: 'SAVE_AREA',
        area: iwiArr,
    }
}


export function fetchAllIwi() {

    return dispatch => {

        getIwi().then(allIwi => {
            console.log("fetch iwi arr (from actions/iwi.js)", allIwi)
            dispatch(saveAllIwi(allIwi))
            dispatch(saveArea(allIwi))
        })
    }
}

