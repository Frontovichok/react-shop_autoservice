import React from 'react';

import Header from '../containers/Header';
import PageHeader from './PageHeader';

const NotFound = () => (
    <React.Fragment>
        <Header />
        <div id="main">
            <PageHeader title="Обслуживание"/>
            <h4 style={{textAlign: "center"}}>
                Service
            </h4>
        </div>
    </React.Fragment>
);
export default NotFound;
