import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        const carouselSliderData = [
            {
                backgroundImage:
                    'linear-gradient(to right, rgba(23, 33, 35, 0.3), rgba(23, 33, 35, 0.55), rgba(23, 33, 35, 0.6), rgba(23, 33, 35, 0.55), rgba(23, 33, 35, 0.3)), url(/slide_1.jpg)',
                title: 'Автомастерская 1',
                description: 'Лучшая мастерская 1',
            },
            {
                backgroundImage:
                    'linear-gradient(to right, rgba(23, 33, 35, 0.3), rgba(23, 33, 35, 0.55), rgba(23, 33, 35, 0.6), rgba(23, 33, 35, 0.55), rgba(23, 33, 35, 0.3)), url(/slide_2.jpg)',
                title: 'Автомастерская 2',
                description: 'Лучшая мастерская 2',
            },
            {
                backgroundImage:
                    'linear-gradient(to right, rgba(23, 33, 35, 0.3), rgba(23, 33, 35, 0.55), rgba(23, 33, 35, 0.6), rgba(23, 33, 35, 0.55), rgba(23, 33, 35, 0.3)), url(/slide_3.jpg)',
                title: 'Автомастерская 3',
                description: 'Лучшая мастерская 3',
            },
        ];
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={28}
                totalSlides={3}
                isPlaying={true}
                hasMasterSpinner={false}
                interval={5000}
                data-slideout-ignore>
                <Slider>
                    {carouselSliderData.map((slider, i) => (
                        <Slide
                            index={i}
                            style={{
                                backgroundImage: `${slider.backgroundImage}`,
                            }}
                            key={i}>
                            <h2 className="slider__title">{slider.title}</h2>
                            <p className="slider__description">
                                {slider.description}
                            </p>
                        </Slide>
                    ))}
                </Slider>
                <DotGroup />
            </CarouselProvider>
        );
    }
}
