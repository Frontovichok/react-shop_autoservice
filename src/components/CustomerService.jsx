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
            {
                title: 'Ремонт дисков',
                imageLink: '/wheel_repair.jpg',
            }
        ],
    },
    {
        cardsName: 'Сервисное обслуживание',
        cards: [
            {
                title: 'Шиномонтаж',
                imageLink: '/tire_fitting.jpg',
            },

            {
                title: 'Полировка',
                imageLink: '/polishing.jpg',
            },
            {
                title: 'Химчистка салона',
                imageLink: '/dry_cleaning.jpg',
            },
            {
                title: 'Замена масла',
                imageLink: '/change_of_oil.jpg',
            },
            {
                title: 'Обслуживание тормозов',
                imageLink: '/brake_service.jpg',
            },
        ],
    },
    {
        cardsName: 'Автозапчасти',
        cards: [
            {
                title: 'Масла',
                imageLink: '/oil.jpg',
            },
            {
                title: 'Шины',
                imageLink: '/tires.jpg',
            },
            {
                title: 'Фары',
                imageLink: '/headlights.jpg',
            },
            {
                title: 'Аккумуляторы',
                imageLink: '/battery.jpg',
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
