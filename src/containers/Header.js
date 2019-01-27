import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';

import Header from '../components/Header';

const mapStateToProps = ({ cart }) => ({
    totalPrice: cart.items
        ? cart.items.reduce((total, book) => total + book.price, 0)
        : "0",
    count: cart.items.length,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(cartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
