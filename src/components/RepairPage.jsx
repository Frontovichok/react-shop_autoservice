import React from 'react';

import Header from '../containers/Header';
import PageHeader from './PageHeader';

const NotFound = () => (
    <React.Fragment>
        <Header />
        <div id="main">
            <PageHeader title="Ремонт"/>
	        <h4 style={{textAlign: "center"}}>
	            Repair
	        </h4>
        </div>
    </React.Fragment>
);
export default NotFound;
