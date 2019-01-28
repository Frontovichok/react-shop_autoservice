import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const SecondMenu = () => (
    <Menu
        defaultActiveIndex={1}
        className="custom__menu custom__menu_second">
        <Menu.Item
            as={NavLink}
            exact
            to="/"
            activeClassName="active"
            name="home">
            Главная
        </Menu.Item>
        <Menu.Item
            as={NavLink}
            to="/repair"
            activeClassName="active"
            name="repair">
            Ремонт
        </Menu.Item>
        <Menu.Item
            as={NavLink}
            to="/service"
            activeClassName="active"
            name="service">
            Обслуживание
        </Menu.Item>
        <Menu.Item
            as={NavLink}
            to="/shop"
            activeClassName="active"
            name="shop">
            Автозапчасти
        </Menu.Item>
        <Menu.Item
            as={NavLink}
            to="/contacts"
            activeClassName="active"
            name="contacts">
            Контакты
        </Menu.Item>
    </Menu>
);
export default SecondMenu;
