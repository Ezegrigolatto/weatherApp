const initialState = {
    allInfo: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_INFO':
            return {
                ...state,
                allInfo: action.payload,
            };
        default:
            return state;
    }
}