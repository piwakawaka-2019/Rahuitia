const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_AREA':
            return newArr(action.area);
        default:
            return state;
    }
};

let areaNames = [];
const newArr = (iwi) => {
    // console.log(iwi, "this is the current one")
    iwi.map(area => {
        for (var i in area) {
            // console.log(i);
            areaNames.push(i);
        }

    });
    return areaNames
}

export default reducer