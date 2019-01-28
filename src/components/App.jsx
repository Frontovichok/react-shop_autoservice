import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import 'video-react/dist/video-react.css';

import 'semantic-ui-css/semantic.min.css';
import '../app.styl';

import MainPage from './MainPage';
import RepairPage from './RepairPage';
import ServicePage from './ServicePage';
import ShopPage from '../containers/ShopPage';
import ContactsPage from './ContactsPage';
import NotFound from './NotFound';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/repair" component={RepairPage} />
                    <Route path="/service" component={ServicePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/contacts" component={ContactsPage} />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
