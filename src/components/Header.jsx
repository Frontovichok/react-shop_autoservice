import React, { Component } from 'react';
// import { Menu, Container } from 'semantic-ui-react';
// import Contacts from './Contacts';

import FirstMenu from './FirstMenu';
import SecondMenu from './SecondMenu';

export default class MenuExampleStackable extends Component {
    // state = { activeItem: 'home' };

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        // const { activeItem } = this.state;

        return (
            <React.Fragment>
                <FirstMenu />
                <SecondMenu />
            </React.Fragment>
        );
    }
}
