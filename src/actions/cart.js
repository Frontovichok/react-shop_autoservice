const addToCart = (obj) => ({
    type: 'ADD_TO_CART',
    payload: obj,
});

const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
});

export {addToCart, removeFromCart}