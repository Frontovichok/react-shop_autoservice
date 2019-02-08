import React from 'react';
// import { Container, List, Icon } from 'semantic-ui-react';
import Contacts from './Contacts';
// import YandexMap from './YandexMap2'
const YandexMap = React.lazy(() => import('./YandexMap2'));

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="about__wrap">
                    <div className="about">
                        <p className='about__title'>Контакты</p>
                        <Contacts />
                    </div>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <YandexMap class="footer__map" height={400}/>
                    </React.Suspense>
                </div>
                {/*<div>Автомасерская NFS 2019</div>*/}
            </footer>
        );
    }
}
export default Footer;
