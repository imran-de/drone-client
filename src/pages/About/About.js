import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import PageBanner from '../Shared/PageBanner/PageBanner';

const About = () => {
    return (
        <>
            <PageBanner pageTitle="About Us"></PageBanner>
            <Container className="my-5">
                <Row>
                    <Col md={6}>
                        <img src="https://i.ibb.co/qFXNKp4/about-img.png" alt="" className="img-fluid" />
                    </Col>
                    <Col md={6}>
                        <h5 className="fw-bold text-uppercase blue">OUR SHORT STORY</h5>
                        <h1 className="fw-bolder fs-1 blue">Know About Drone</h1>
                        <p>Drones is bringing the drone world to your doorstep and making it possible for anyone to fly these incredible machines.From commercial grade drones to beginner drone kits, we outfit the drone enthusiast and photographer with everything they need.</p>
                        <p>We Can Take You Higher! We not only strive to provide a memorable shopping experience but also enjoy offering our knowledge and experience to our customers through our custom made enterprise solutions.</p>
                        <button className="btn bg-blue text-light">READ MORE</button>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
};

export default About;