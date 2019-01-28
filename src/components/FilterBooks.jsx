import React, { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react';

export default class MenuExampleText extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu vertical>
                <Menu.Item
                    name="promotions"
                    active={activeItem === 'promotions'}
                    onClick={this.handleItemClick}>
                    <Header as="h4">Запчасти</Header>
                    <p>запчасть 1</p>
                    <p>запчасть 2</p>
                </Menu.Item>

                <Menu.Item
                    name="coupons"
                    active={activeItem === 'coupons'}
                    onClick={this.handleItemClick}>
                    <Header as="h4">Масла</Header>
                    <p>Масло 1</p>
                    <p>Масло 2</p>
                </Menu.Item>

                <Menu.Item
                    name="rebates"
                    active={activeItem === 'rebates'}
                    onClick={this.handleItemClick}>
                    <Header as="h4">Диски</Header>
                    <p>Диск 1</p>
                    <p>Диск 2</p>
                </Menu.Item>
            </Menu>
        );
    }
}
