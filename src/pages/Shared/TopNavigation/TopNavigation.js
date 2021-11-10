import React from 'react';
import './TopNavigation.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const TopNavigation = () => {
    return (
        <Container className="top-navigation">
            <Row>
                <Col sm={12} md={6}>
                    <Navbar bg="" variant="light">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><i className="fas fa-headset"></i> Support</Nav.Link>
                            <Nav.Link href="mailto: info@drone.com"><i className="fas fa-envelope"></i> info@drone.com</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
                <Col sm={12} md={6} className="d-flex justify-content-end">
                    <Navbar bg="" variant="light">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><i className="fas fa-cart-plus"></i> $0.00</Nav.Link>
                            <Navbar.Brand href="#home" className="user"><i className="fas fa-user"></i></Navbar.Brand>
                            <Nav.Link href="/login">Sign in | Join</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default TopNavigation;