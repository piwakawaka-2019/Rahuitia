import { getRahui } from '../apis/rahui'




export function saveAllRahui (rahuiArr) {
    return {
        type: 'SAVE_ALLRAHUI',
        rahui: rahuiArr
    }
}


export function fetchAllRahui () {
   
    return dispatch => { 
   
        getRahui().then(allrahui => {
            console.log("fetch rahui arr", allrahui)
            dispatch(saveAllRahui(allrahui))
        })     
    }
}

  