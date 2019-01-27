import 'babel-polyfill';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

// import App from './containers/App';
import App from './components/App';

import createStore from './store';
const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
