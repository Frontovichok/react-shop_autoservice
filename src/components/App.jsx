import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Container } from 'semantic-ui-react';
import 'video-react/dist/video-react.css';

import 'semantic-ui-css/semantic.min.css';
import '../app.styl';

import MainPage from './MainPage';
// import Contacts from './Contacts';
import NotFound from './NotFound';
// import CarouselSlider from './CarouselSlider';
// import CustomerService from './CustomerService';
import Footer from './Footer';

class App extends React.Component {
    render() {
        // const isMobile = true; //window.innerWidth <= 500;
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/" component={Footer} />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
