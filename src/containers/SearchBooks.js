import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';

import SearchBooks from "../components/SearchBooks";

const mapStateToProps = ({ books }) => ({
    searchQuery: books.searchQuery,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(booksActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBooks);