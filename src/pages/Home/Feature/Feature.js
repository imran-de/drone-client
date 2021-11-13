import React from 'react';
import './Feature.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Feature = () => {
    return (
        <Container className="my-5">
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className="h-100">
                        <div className="row">
                            <div className="col-4 d-flex align-items-center justify-content-center">
                                <div className="feature-icon-box">
                                    <Card.Img variant="top" src="https://i.ibb.co/cbG7TZ7/feature-icon-1.png" />
                                </div>
                            </div>
                            <div className="col-8 text-start">
                                <Card.Body className="">
                                    <Card.Title>Free Shipping</Card.Title>
                                    <Card.Text>
                                        Easy and fast delivery worldwide. Check out free shipping options
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <div className="row">
                            <div className="col-4 d-flex align-items-center justify-content-center">
                                <div className="feature-icon-box">
                                    <Card.Img variant="top" src="https://i.ibb.co/wwZ0BSK/feature-icon-2.png" />
                                </div>
                            </div>
                            <div className="col-8">
                                <Card.Body>
                                    <Card.Title>30 Days Returns</Card.Title>
                                    <Card.Text>
                                        Free returns with our 30 Day Money Back Guarantee.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <div className="row">
                            <div className="col-4 d-flex align-items-center justify-content-center">
                                <div className="feature-icon-box">
                                    <Card.Img variant="top" src="https://i.ibb.co/Mc97fPB/feature-icon-3.png" />
                                </div>
                            </div>
                            <div className="col-8">
                                <Card.Body>
                                    <Card.Title>24/7 Support</Card.Title>
                                    <Card.Text>
                                        Fast and thorough support, available to all customers 24/7
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Feature;