import React from 'react';
import './HomepageReview.css';
import { Card, Carousel, Container } from 'react-bootstrap';

const HomepageReview = () => {
    return (
        <Container fluid>
            <div className="review-section my-5">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-sm-10 col-md-8">
                        <div className="section-title text-center">
                            <span className="subtitle">TESTIMONIALS</span>
                            <h2 className="fs-1 fw-bolder text-center">What People Are Saying</h2>
                            <p>Some Impresions from our customers! Please read some of the lovely things our customers say about us.</p>
                        </div>
                    </div>
                </div>
                {/* review slider */}
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <div className="slider d-flex justify-content-center">
                                    <Card>
                                        <div className="d-flex justify-content-center align-items-center pt-3">
                                            <Card.Img variant="top" src="http://pixner.net/todas/todas-demo/assets/img/testi-user-1.jpg" />
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <div className="slider d-flex justify-content-center">
                                    <Card>
                                        <div className="d-flex justify-content-center align-items-center pt-3">
                                            <Card.Img variant="top" src="http://pixner.net/todas/todas-demo/assets/img/testi-user-1.jpg" />
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <div className=" slider d-flex justify-content-center">
                                    <Card>
                                        <div className="d-flex justify-content-center align-items-center pt-3">
                                            <Card.Img variant="top" src="http://pixner.net/todas/todas-demo/assets/img/testi-user-1.jpg" />
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HomepageReview;