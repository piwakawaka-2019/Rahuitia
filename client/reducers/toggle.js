const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_LANG':
            return action.lang;
        default:
            return state;
    }
};


export default reducer