import React from 'react';
// import { Container, List, Icon } from 'semantic-ui-react';

import Contacts from './Contacts';
import Header from './Header';
import PageHeader from './PageHeader';

// import YandexMap from './YandexMap2'
const YandexMap = React.lazy(() => import('./YandexMap2'));

class ContactsPage extends React.Component {
    render() {
        const isMobile = window.innerWidth <= 1000;
        return (
            <React.Fragment>
                <Header />
                <div id="main">
                    <PageHeader title="Контакты"/>
                    <footer className="footer">
                        <div className="about__wrap wrap">
                            <div className="about">
                                <p className="about__title">Контакты</p>
                                <Contacts />
                            </div>
                            <React.Suspense fallback={<div>Loading...</div>}>
                                {isMobile ? (
                                    <YandexMap
                                        class="footer__map full-width"
                                        height={400}
                                    />
                                ) : (
                                    <YandexMap class="footer__map full-width" />
                                )}
                            </React.Suspense>
                        </div>
                        {/*<div>Автомасерская NFS 2019</div>*/}
                    </footer>
                </div>
            </React.Fragment>
        );
    }
}
export default ContactsPage;
