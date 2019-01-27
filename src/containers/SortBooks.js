import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';

import SortBooks from "../components/SortBooks";

const mapStateToProps = ({ books }) => ({
    sortBy: books.sortBy,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(booksActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortBooks);