import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import TopNavigation from '../TopNavigation/TopNavigation';

const PageBanner = ({ pageTitle }) => {
    return (
        <Container fluid className="shop-page-banner">
            <TopNavigation />
            <Navigation />

            <Container className="mt-5">
                <Row>
                    <h1 className="fs-1 fw-bolder text-uppercase text-light py-5 my-5">{pageTitle}</h1>
                </Row>
            </Container>

        </Container>
    );
};

export default PageBanner;