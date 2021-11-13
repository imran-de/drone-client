import React from 'react';
import './EasyToUse.css';
import { Col, Container, Row } from 'react-bootstrap';

const EasyToUse = () => {
    return (
        <div className="easy-to-use">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="easy-to-use">
                            <div className="part-img">
                                <img src="https://i.ibb.co/zm5mFNF/easy-to-use-img.png" alt="" />
                                <img src="https://i.ibb.co/VNjTHC3/easy-to-use-img-2.png" alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex align-items-center my-3 my-md-0">
                        <div className="text-light pe-lg-5">
                            <h6 className="text-light fw-bolder text-uppercase">INTUITIVE, INNOVATIVE</h6>
                            <h1 className="fw-bolder">Easy to USE</h1>
                            <p>Drone takes the hassle out of aerial filming. From removing the need for a remote control by using your smartphone or other devices, to letting you choose your camera movement and position, to automated flight and framing, we refined each and every detail to make sure filming from the sky is actually fun and easy, right out of the box and other industries works properly. We are create a video tutorial and You can find many video tutorials to give you tips and tricks to manage your drone.</p>
                            <div className="banner-buttons">
                                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=e8eSfqaaGXQ&list=RDe8eSfqaaGXQ&start_radio=1">
                                    <span className="icon banner-button">
                                        <i className="fas fa-play"></i> Play Video
                                    </span>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EasyToUse;