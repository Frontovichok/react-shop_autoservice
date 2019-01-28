import React, { Component } from 'react';
import { Container, Card, Grid } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import '../app.styl';

import Header from '../containers/Header';
import BookCard from '../containers/BookCard';
import LoaderBooks from './LoaderBooks';
import SortBooks from '../containers/SortBooks';
import FilterBooks from './FilterBooks';
import LongModal from './LongModal';

class App extends Component {
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
        const isMobile = window.innerWidth <= 500;
        return (
            <React.Fragment>
                <Header />
                <Container>
                    <Grid celled>
                        <Grid.Row>
                            {!isMobile && (
                                <Grid.Column width={3} className="filter_column">
                                    <FilterBooks />
                                </Grid.Column>
                            )}
                            <Grid.Column width={13} className="main_column">
                                <Grid.Row className="sort-filter_mobile">
                                    <SortBooks />
                                    {isMobile && <LongModal />}
                                </Grid.Row>
                                <Card.Group itemsPerRow={4} doubling>
                                    {!isReady ? (
                                        <LoaderBooks />
                                    ) : (
                                        books.map((book, i) => (
                                            <BookCard key={i} {...book} />
                                        ))
                                    )}
                                </Card.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;