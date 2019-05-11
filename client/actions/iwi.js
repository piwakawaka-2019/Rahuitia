import { getIwi } from '../apis/iwi'




export function saveAllIwi(iwiArr) {
    return {
        type: 'SAVE_IWI',
        iwi: iwiArr
    }
}


export function fetchAllIwi() {

    return dispatch => {

        getIwi().then(allIwi => {
            console.log("fetch iwi arr", allIwi)
            dispatch(saveAllIwi(allIwi))
        })
    }
}

