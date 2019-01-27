import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const BookCard = (book) => {
    const { title, author, image, price, addToCart, addedCount } = book;
    return (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className="date">{author}</span>
                </Card.Meta>
                <Card.Description>Описание книги</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name="rub" />
                {price}
            </Card.Content>
            <Button color="green" onClick={addToCart.bind(this, book)}>
                {addedCount > 0 ? `В корзине (${addedCount})` : 'В корзину'}
            </Button>
        </Card>
    );
};

export default BookCard;
