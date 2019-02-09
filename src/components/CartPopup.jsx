import React from 'react';
import { Icon, Button, Grid, Popup } from 'semantic-ui-react';

const CartPopup = () => (
    <Popup
        wide
        trigger={
            <div>
                <Icon name="cart" size="big" />
                Корзина
            </div>
        }>
        <Grid divided columns="equal">
            <Grid.Column>Товары</Grid.Column>
        </Grid>
    </Popup>
);

export default CartPopup;
