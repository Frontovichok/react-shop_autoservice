import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'dragscroll';

import { default as Card } from './ServiceCard';

const CardsCarouselDesktop = (props) => (
    <PerfectScrollbar suppressScrollY={true} suppressScrollX={true} suppressScrollX={false} className="customer-service__cards">
        {props.cardsObj.cards.map((card, i) => (
            <Card {...card} key={i}/>
        ))}
    </PerfectScrollbar>
);
export default CardsCarouselDesktop;
