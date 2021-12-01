const initialState = {
    principal: [],
    allInfo: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRINCIPAL':
            return {
                ...state,
                principal: action.payload,
            };
        case 'GET_ALL_INFO':
            return {
                ...state,
                allInfo: action.payload,
            };
        default:
            return state;
    }
}