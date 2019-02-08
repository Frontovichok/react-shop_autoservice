import React, { Component } from 'react';
// import { Menu, Container } from 'semantic-ui-react';
// import Contacts from './Contacts';

import FirstMenu from './FirstMenu';
import SecondMenu from './SecondMenu';
import SlideMenuMobile from './SlideMenuMobile';

export default class MenuExampleStackable extends Component {
    // state = { activeItem: 'home' };

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const isMobile = window.innerWidth <= 1000;
        // const { activeItem } = this.state;

        return (
            <React.Fragment>
                {isMobile ? (
                    <SlideMenuMobile />
                ) : (
                    <React.Fragment>
                        <FirstMenu />
                        <SecondMenu />
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}
