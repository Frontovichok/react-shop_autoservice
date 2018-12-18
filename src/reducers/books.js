const initialState = {
    books: [
        {
            id: 0,
            title: 'Джордж Оруэл',
        },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            console.log(new Date().toLocaleString());

            return {
                ...state,
                books: action.payload,
            };
        case 'ADD_BOOKS':
            return {
                ...state,
                books: [...state.books, action.payload],
            };
        default:
            return state;
    }
};
