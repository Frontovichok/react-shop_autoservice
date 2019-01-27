import React from 'react';

class YandexMap extends React.Component {
    yandexMap = React.createRef();
    componentDidMount() {
        const yandexMapScript = document.createElement('script');
        yandexMapScript.src =
            'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8af9c3805a78fb1097326b6e9a9b368b71a92c5586c71b73d1713e5fec025de2&amp;width=100%25&amp;height=566&amp;lang=ru_RU&amp;scroll=true;';
        yandexMapScript.async = true;
        this.yandexMap.current.append(yandexMapScript);
    }

    render() {
        return (
            <div ref={this.yandexMap} />
        );
    }
}
export default YandexMap;