import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const FAQ = () => {
    return (
        <Container>
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-sm-10 col-md-8">
                    <div className="product-title text-center">
                        <span className="product-subtitle">ALL ANSWERS IN ONE PLACE</span>
                        <h2 className="fs-1 fw-bolder text-center">Frequently Asked Questions</h2>
                        <p>Get answers to our most commonly asked questions about Todas.You can find the answers for the most common questions asked by our customers. Please check this guide before contacting us.</p>
                    </div>
                </div>
            </div>

            <Row className="d-flex justify-content-center mt-3 mb-5">
                <Col md={8} lg={6}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item className="border-0 shadow mb-2" eventKey="0">
                            <Accordion.Header>  How can I cancel my order?</Accordion.Header>
                            <Accordion.Body>
                                Yes, very simple you can cancel your order anytime in your my order page.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="border-0 shadow mb-2" eventKey="1">
                            <Accordion.Header> Why should I create an drone account?</Accordion.Header>
                            <Accordion.Body>
                                yeah you need to create account. we need to identify you, and latter we can share any happy news easily if you make account.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="border-0 shadow mb-2" eventKey="3">
                            <Accordion.Header>What if I want to close my drone account?</Accordion.Header>
                            <Accordion.Body>
                                Yes, very simple you can cancel your order anytime in your my order page.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className="border-0 shadow mb-2" eventKey="4">
                            <Accordion.Header> How i get my product security?</Accordion.Header>
                            <Accordion.Body>
                                yeah you need to create account. we need to identify you, and latter we can share any happy news easily if you make account.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;