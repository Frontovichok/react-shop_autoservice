import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBooks = (books, sortBy) => {
    switch (sortBy) {
        case 'alphabet':
            return orderBy(books, 'title', 'asc');
        case 'popular':
            return books;
        case 'new':
            return books;
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'price_high':
            return orderBy(books, 'price', 'desc');
        case 'rating':
            return books;
        default:
            return books;
    }
};

const filterBooks = (books, searchQuery) => {
    if (searchQuery !== '') {
        books = books.filter(
            (book) =>
                book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=
                0 ||
                book.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >=
                0
        );
    }
    return books;
};

const mapStateToProps = ({ books }) => ({
    books:
    books.items &&
    sortBooks(filterBooks(books.items, books.searchQuery), books.sortBy),
    isReady: books.isReady,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(booksActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);