const setBooks = (books) => ({
    type: 'SET_BOOKS',
    payload: books,
});

const setSorting = (sortBy) => ({
    type: 'SET_SORTING',
    payload: sortBy,
});

const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query,
});

export { setBooks, setSorting, setSearchQuery };
