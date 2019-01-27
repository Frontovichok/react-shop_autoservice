import React from 'react';

import CardsCarouselDesktop from './CardsCarouselDesktop';
import CardsCarouselMobile from './CardsCarouselMobile';

export default class CustomerSection extends React.Component {
    render() {
        const isMobile = window.innerWidth < 1025;
        console.log(isMobile);
        return (
            <section className="customer-service__section">
                <a href="/repair" className="customer-service__link">
                    {this.props.cardsObj.cardsName}
                </a>
                {isMobile ? (
                    <CardsCarouselMobile cardsObj={this.props.cardsObj} />
                ) : (
                    <CardsCarouselDesktop cardsObj={this.props.cardsObj} />
                )}
                </section>
        );
    }
}
