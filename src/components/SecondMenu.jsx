import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class FirstMenu extends React.Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu
                defaultActiveIndex={1}
                stackable
                className="custom__menu custom__menu_second">
                {/*<Menu.Menu className="custom__menu_center">*/}
                    <Menu.Item
                        name="home"
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}>
                        Главная
                    </Menu.Item>
                    <Menu.Item
                        name="repair"
                        active={activeItem === 'repair'}
                        onClick={this.handleItemClick}>
                        Ремонт
                    </Menu.Item>
                    <Menu.Item
                        name="service"
                        active={activeItem === 'service'}
                        onClick={this.handleItemClick}>
                        Обслуживание
                    </Menu.Item>
                    <Menu.Item
                        name="shop"
                        active={activeItem === 'shop'}
                        onClick={this.handleItemClick}>
                        Автозапчасти
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/contacts"
                        name="contacts"
                        active={activeItem === 'contacts'}
                        onClick={this.handleItemClick}>
                        {/*<Contacts />*/}
                        Контакты
                    </Menu.Item>
                {/*</Menu.Menu>*/}
            </Menu>
        );
    }
}
