import React from 'react';
import './Contact.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import PageBanner from '../Shared/PageBanner/PageBanner';
const Contact = () => {
    return (
        <>
            <PageBanner pageTitle="Contact Us"></PageBanner>
            <img src="https://i.ibb.co/Gp0J3xD/breadcrumb-img-for-contact.png" alt="" hidden />
            <Container className="my-5">
                <Row>
                    <Col md={6}>
                        <h5 className="fw-bold text-uppercase blue">Contact us</h5>
                        <h1 className="fw-bolder fs-1 blue">Get In Touch</h1>
                        <p>whenever you need us. We are here for you - contact us for all your support needs, be it technical, general queries or information support. Our hotline numbers and e-mail are open 24x7 for your needs.</p>


                        <div className="row mb-3">
                            <div className="col-2 d-flex align-items-center justify-content-center border">
                                <div className="contact-icon-box">
                                    <h1><i className="fas fa-map-marker-alt text-success fs-1"></i></h1>
                                </div>
                            </div>
                            <div className="col-8 text-start">
                                <Card.Body>
                                    <Card.Text>
                                        8901 Marmora Raod, New Yourk City 25 Glasgow, D04 89GR
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-2 d-flex align-items-center justify-content-center border">
                                <div className="contact-icon-box">
                                    <h1><i className="fas fa-phone-alt text-success fs-1"></i></h1>
                                </div>
                            </div>
                            <div className="col-8 text-start">
                                <Card.Body>
                                    <Card.Text>
                                        <a className="text-dark" href="tel:+8801926294263">(+880) 1926294263</a><br />
                                        <a className="text-dark" href="tel:+8801715777080">(+880) 1715777080</a>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-2 d-flex align-items-center justify-content-center border">
                                <div className="contact-icon-box">
                                    <h1><i className="fas fa-globe text-success fs-1"></i></h1>
                                </div>
                            </div>
                            <div className="col-8 text-start">
                                <Card.Body>
                                    <Card.Text>
                                        <a className="text-dark" href="mailto: info@drone.com">info@drone.com</a><br />
                                        <a className="text-dark" href="/contact">www.drone.com</a>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-4 mb-md-0">
                                <span className="blue fw-bolder">Stay In Touch: </span>
                                <span className="blue social-icon"><i className="fab fa-facebook-f"></i></span>
                                <span className="blue social-icon px-2"><i className="fab fa-twitter"></i></span>
                                <span className="blue social-icon"><i className="fab fa-pinterest-p"></i></span>
                                <span className="blue social-icon"><i className="fab fa-vimeo-v"></i></span>
                                <span className="blue social-icon"><i className="fab fa-instagram"></i></span>

                            </div>
                        </div>
                    </Col>

                    <Col className="contact" md={6}>
                        <div className="contact-form">
                            <h3>Let us hear your thoughts</h3>
                            <form>
                                <input type="text" placeholder="Your name" />
                                <input type="email" placeholder="Your Email" />
                                <textarea placeholder="Your Message"></textarea>
                                <button>Send Message</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
};

export default Contact;