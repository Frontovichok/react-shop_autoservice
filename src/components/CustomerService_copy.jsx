import React from 'react';
import { Container } from 'semantic-ui-react';

import ServiceSection from './ServiceSection';

const cardsArray = [
    {
        cardsName: 'Ремонт',
        cards: [
            {
                title: 'Двигатель',
                imageLink: '/motor.jpg',
            },
            {
                title: 'Подвеска',
                imageLink: '/suspension.jpg',
            },
            {
                title: 'Тормоза',
                imageLink: '/brakes.jpg',
            },
            {
                title: 'Электрика',
                imageLink: '/electrician.jpg',
            },
            {
                title: 'Кондиционер',
                imageLink: '/conditioner.jpg',
            },
            {
                title: 'Рулевая',
                imageLink: '/steering_control.jpg',
            },
        ],
    },
    {
        cardsName: 'Сервисное обслуживание',
        cards: [
            {
                title: 'Двигатель',
                imageLink: '/motor.jpg',
            },
            {
                title: 'Подвеска',
                imageLink: '/suspension.jpg',
            },
            {
                title: 'Тормоза',
                imageLink: '/brakes.jpg',
            },
            {
                title: 'Электрика',
                imageLink: '/electrician.jpg',
            },
            {
                title: 'Кондиционер',
                imageLink: '/conditioner.jpg',
            },
            {
                title: 'Рулевая',
                imageLink: '/steering_control.jpg',
            },
        ],
    },
    {
        cardsName: 'Магазин',
        cards: [
            {
                title: 'Двигатель',
                imageLink: '/motor.jpg',
            },
            {
                title: 'Подвеска',
                imageLink: '/suspension.jpg',
            },
            {
                title: 'Тормоза',
                imageLink: '/brakes.jpg',
            },
            {
                title: 'Электрика',
                imageLink: '/electrician.jpg',
            },
            {
                title: 'Кондиционер',
                imageLink: '/conditioner.jpg',
            },
            {
                title: 'Рулевая',
                imageLink: '/steering_control.jpg',
            },
        ],
    },
];

const TabExampleSecondaryPointing = () => (
    <Container>
        <div className="customer-service">
            <h1 className="customer-service__title">Услуги</h1>
            <div className="customer-service__wrap">
                {cardsArray.map((cards, i) => (
                    <ServiceSection cardsObj={cards} key={i} />
                ))}
            </div>
        </div>
    </Container>
);

export default TabExampleSecondaryPointing;
