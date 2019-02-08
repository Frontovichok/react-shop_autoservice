import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import 'video-react/dist/video-react.css';

import 'semantic-ui-css/semantic.min.css';
import '../app.styl';

import Header from '../containers/Header';
import PageHeader from './PageHeader';
import CarouselSlider from './CarouselSlider';
import CustomerService from './CustomerService';
import Footer from './Footer';

class App extends Component {
    render() {
        const isMobile = true; //window.innerWidth <= 500;
        return (
            <React.Fragment>
                <Header />
                <div id="main">
                    <PageHeader title="Главная"/>
                    <CarouselSlider />
                    <Container>
                        <CustomerService />
                    </Container>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
