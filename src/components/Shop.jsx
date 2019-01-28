import React from 'react';
import { Container, Card, Grid } from 'semantic-ui-react';
import 'video-react/dist/video-react.css';

import 'semantic-ui-css/semantic.min.css';
import '../app.styl';

import BookCard from '../containers/BookCard';
import LoaderBooks from './LoaderBooks';
import SortBooks from '../containers/SortBooks';
import LongModal from './LongModal';
import FilterBooks from './FilterBooks';

export default class Shop extends React.Component {
    async componentWillMount() {
        const { setBooks } = this.props;
        let books = await fetch('/products.json').then((response) =>
            response.json()
        );
        console.log(books);
        fetch('/products.json')
            .then((response) => response.json())
            .then(function(data) {
                setBooks(data);
            })
            .catch((error) => {
                console.log('error');
            });
    }
    render() {
        const { books, isReady } = this.props;
        const isMobile = true; //window.innerWidth <= 500;
        return (
            <Container>
                <Grid celled>
                    <Grid.Row>
                        {!isMobile && (
                            <Grid.Column width={3} className="filter_column">
                                <FilterBooks />
                            </Grid.Column>
                        )}
                        <Grid.Column width={16} className="main_column" />
                    </Grid.Row>
                </Grid>
                <Grid.Row className="sort-filter_mobile">
                    <SortBooks />
                    {isMobile && <LongModal />}
                </Grid.Row>
                <Card.Group itemsPerRow={4} doubling>
                    {!isReady ? (
                        <LoaderBooks />
                    ) : (
                        books.map((book, i) => <BookCard key={i} {...book} />)
                    )}
                </Card.Group>
            </Container>
        );
    }
}
