const initialState = {
    isReady: false,
    items: null,
    sortBy: 'popular',
    searchQuery: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                items: action.payload,
                isReady: true,
            };
        case 'SET_READY_STATE':
            return {
                ...state,
                items: action.payload,
            };
        case 'SET_SORTING':
            return {
                ...state,
                sortBy: action.payload
            };
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        default:
            return state;
    }
};
