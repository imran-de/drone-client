import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';

const PageNotFound = () => {
    return (
        <Container>
            <Navigation />
            <h2 className="my-5">The page you are looking not found!</h2>
        </Container>
    );
};

export default PageNotFound;