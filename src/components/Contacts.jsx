import React from 'react';
import { List, Icon } from 'semantic-ui-react';

const ListExampleIconShorthand = () => (
    <List>
        <List.Item icon="marker" content="Москва, ул Тверская ..." size="large"/>
        <List.Item icon="calendar alternate" content="Пн-Пт 8:00 - 21:00" />
        <List.Item icon="phone" content="8 916 503-03-82" />
        <List.Item icon="mail" content="gdsfg@mail.ru" />
        <Icon link name='vk' size='large' />
        <Icon link name='instagram' size='large' />
        <Icon link name='youtube' size='large' />
    </List>
);

export default ListExampleIconShorthand;
