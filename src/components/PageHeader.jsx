import React from 'react';
import { Icon } from 'semantic-ui-react';

export default class PageHeader extends React.Component {
    render() {
        const isMobile = window.innerWidth <= 1000;
        return (
            <React.Fragment>
                {isMobile && (
                    <header className="header-page">
                        <button className="hamburger hamburger--arrow js-hamburger toggle-menu__button" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner" />
                            </span>
                        </button>
                        <div className="header-page__title">{this.props.title}</div>
                        <Icon className="header-page__cart" name='shopping basket'/>
                    </header>
                )}
            </React.Fragment>
        );
    }
}
