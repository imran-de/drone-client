import React from 'react';
import './ShopPageBanner.css';
import { Container, Row } from 'react-bootstrap';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import Navigation from '../../Shared/Navigation/Navigation';

const ShopPageBanner = () => {
    return (
        <Container fluid className="shop-page-banner">
            <TopNavigation />
            <Navigation />

            <Container className="mt-5">
                <Row>
                    <h1 className="fs-1 fw-bolder text-uppercase text-light py-5 my-5">Our Drone Collection's</h1>
                </Row>
            </Container>

        </Container>
    );
};

export default ShopPageBanner;