import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';

import CartPopup from './CartPopup';

export default class FirstMenu extends React.Component {
    render() {
        return (
            <Container>
                <Menu stackable className="custom__menu custom__menu_first">
                    <Menu.Item
                        name="contacts"
                        position="left"
                        onClick={this.handleItemClick}>
                        <Icon name="phone" size="large" />8 911 111 11-11
                    </Menu.Item>
                    <Menu.Item name="home" onClick={this.handleItemClick}>
                        <img
                            src="./logo.png"
                            alt="logo"
                            className="custom__menu_logo"
                        />
                    </Menu.Item>
                    <Menu.Item
                        name="repair"
                        position="right"
                        onClick={this.handleItemClick}>
                        <CartPopup />
                    </Menu.Item>
                </Menu>
            </Container>
        );
    }
}
