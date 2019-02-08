import React from 'react';
import { Link } from 'react-router-dom';

import CardsCarouselDesktop from './CardsCarouselDesktop';
import CardsCarouselMobile from './CardsCarouselMobile';

export default class CustomerSection extends React.Component {
    render() {
        const isMobile = window.innerWidth < 1025;
        return (
            <section className="customer-service__section">
                <Link to={this.props.cardsObj.link} className="customer-service__link">
                    {this.props.cardsObj.cardsName}
                </Link>
                {isMobile ? (
                    <CardsCarouselMobile cardsObj={this.props.cardsObj} />
                ) : (
                    <CardsCarouselDesktop cardsObj={this.props.cardsObj} />
                )}
            </section>
        );
    }
}
