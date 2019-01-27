import React from 'react';
import { Icon } from 'semantic-ui-react';
import 'dragscroll';

import { default as Card } from './ServiceCard';

export default class CardsCarouselDesktop extends React.Component {
    cardsContainer = React.createRef();
    btnPrev = React.createRef();
    btnNext = React.createRef();

    handleScroll = (e) => {
        const maxScrollLeft = e.target.scrollWidth - e.target.clientWidth;

        if (e.target.scrollLeft > 0 && e.target.scrollLeft < maxScrollLeft) {
            this.btnPrev.current._reactInternalFiber.child.stateNode.classList.toggle(
                'limit',
                false
            );
            this.btnNext.current._reactInternalFiber.child.stateNode.classList.toggle(
                'limit',
                false
            );
        } else if (e.target.scrollLeft === 0) {
            this.btnPrev.current._reactInternalFiber.child.stateNode.classList.add(
                'limit'
            );
        } else {
            this.btnNext.current._reactInternalFiber.child.stateNode.classList.add(
                'limit'
            );
        }
    };

    handleClickPrev = (e) => {
        const cardsContainer = this.cardsContainer.current;
        if (cardsContainer.scrollLeft === 0) return false;
        cardsContainer.classList.add('smooth');
        cardsContainer.scrollLeft = cardsContainer.scrollLeft - 307;
        setTimeout(() => {
            cardsContainer.classList.remove('smooth');
        }, 600);
    };

    handleClickNext = (e) => {
        const cardsContainer = this.cardsContainer.current;
        cardsContainer.classList.add('smooth');
        cardsContainer.scrollLeft = cardsContainer.scrollLeft + 307;
        // cardsContainer.style.transform = 'translateX(-307px)';
        setTimeout(() => {
            cardsContainer.classList.remove('smooth');
        }, 600);
    };
    render() {
        return (
            <div
                className="customer-service__cards dragscroll"
                ref={this.cardsContainer}
                onScroll={this.handleScroll}>
                {this.props.cardsObj.cards.map((card, i) => (
                    <Card {...card} key={i} />
                ))}
                <Icon
                    name="angle left"
                    size="big"
                    className="cards__button limit cards__button_prev"
                    onClick={this.handleClickPrev}
                    ref={this.btnPrev}
                />
                <Icon
                    name="angle right"
                    size="big"
                    className="cards__button cards__button_next"
                    onClick={this.handleClickNext}
                    ref={this.btnNext}
                />
            </div>
        );
    }
}
