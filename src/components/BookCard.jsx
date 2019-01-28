import React from 'react';
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react';

const BookCard = (book) => {
    const { title, image, rating, price, addToCart, addedCount } = book;
    console.log(title, rating);
    return (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Description>Ниличие</Card.Description>
            </Card.Content>
            <Rating icon='star' rating={rating} maxRating={5} disabled />
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
