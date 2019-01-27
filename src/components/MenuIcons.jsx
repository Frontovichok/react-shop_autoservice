import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';

export default class MenuExampleIcons extends Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu icon='labeled'>
                <Menu.Item
                    name="home"
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}>
                    <Icon name="home" />
                    Главная
                </Menu.Item>

                <Menu.Item
                    name="product list"
                    active={activeItem === 'product list'}
                    onClick={this.handleItemClick}>
                    <Icon color="grey" name="list" />
                    Каталог
                </Menu.Item>

                <Menu.Item
                    name="account"
                    active={activeItem === 'account'}
                    onClick={this.handleItemClick}>
                    <Icon color="grey" name="user" />
                    Акаунт
                </Menu.Item>

                <Menu.Item
                    name="faforite"
                    active={activeItem === 'faforite'}
                    onClick={this.handleItemClick}>
                    <Icon color="grey" name="heart" />
                    Избранное
                </Menu.Item>

                <Menu.Item
                    name="cart"
                    active={activeItem === 'cart'}
                    onClick={this.handleItemClick}>
                    <Icon color="grey" name="cart arrow down" />
                    Корзина
                </Menu.Item>
            </Menu>
        );
    }
}
