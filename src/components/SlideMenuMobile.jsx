import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import Slideout from 'slideout'

import '../slideout.css';

class SlideMenuMobile extends React.Component {
    componentDidMount() {
        let slideoutObj = new Slideout({
            'panel': document.getElementById('main'),
            'menu': document.getElementById('menu'),
            'duration': 400,
            'padding': 200,
            'tolerance': 50,
            'easing': 'linear'
        });
        let toggleMenuButton = document.getElementsByClassName('toggle-menu__button')[0];
        toggleMenuButton.addEventListener('click', function(e) {
            slideoutObj.toggle();
            // this.classList.toggle("is-active");
        });
        document.documentElement.className = "";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <nav id="menu">
                    <header>
                        <h3 className="slideout-menu__title">Меню</h3>
                        <Menu
                            defaultActiveIndex={1}
                            className="custom__menu custom__menu_second">
                            <Menu.Item
                                as={NavLink}
                                exact
                                to="/"
                                activeClassName="active"
                                name="home">
                                <Icon name='home' />
                                Главная
                            </Menu.Item>
                            <Menu.Item
                                as={NavLink}
                                to="/repair"
                                activeClassName="active"
                                name="repair">
                                <Icon name='cogs' />
                                Ремонт
                            </Menu.Item>
                            <Menu.Item
                                as={NavLink}
                                to="/service"
                                activeClassName="active"
                                name="service">
                                <Icon name='wrench' />
                                Обслуживание
                            </Menu.Item>
                            <Menu.Item
                                as={NavLink}
                                to="/shop"
                                activeClassName="active"
                                name="shop">
                                <Icon name='shopping cart' />
                                Автозапчасти
                            </Menu.Item>
                            <Menu.Item
                                as={NavLink}
                                to="/contacts"
                                activeClassName="active"
                                name="contacts">
                                <Icon name='address book' />
                                Контакты
                            </Menu.Item>
                        </Menu>
                    </header>
                </nav>
            </div>
        );
    }
}

export default SlideMenuMobile;