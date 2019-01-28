import React from 'react';
// import { Container, List, Icon } from 'semantic-ui-react';

import Contacts from './Contacts';
import Header from './Header';

// import YandexMap from './YandexMap2'
const YandexMap = React.lazy(() => import('./YandexMap2'));


class ContactsPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <footer className="footer">
                    <div className="about__wrap wrap">
                        <div className="about">
                            <p className='about__title'>Контакты</p>
                            <Contacts />
                        </div>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <YandexMap class="footer__map full-width" />
                        </React.Suspense>
                    </div>
                    {/*<div>Автомасерская NFS 2019</div>*/}
                </footer>
            </React.Fragment>
        );
    }
}
export default ContactsPage;