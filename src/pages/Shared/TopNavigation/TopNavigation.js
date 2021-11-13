import React from 'react';
import './TopNavigation.css';
import { Col, Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const TopNavigation = () => {
    const { user, logOut } = useAuth();
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
                            <Nav.Link href="/dashboard/my-orders"><i className="fas fa-cart-plus"></i> $0.00</Nav.Link>
                            {user?.email ? <>
                                <Nav.Link as={Link} to="/dashboard">{user?.displayName}</Nav.Link>
                                <Navbar.Brand href="/dashboard/profile" className="user"><img src={user?.photoURL} alt="logged in user" /></Navbar.Brand>
                                <Nav.Link href="/login" style={{ marginTop: '-10px' }}><Button onClick={logOut} className="btn btn-danger">LogOut</Button></Nav.Link>
                            </>
                                : <>
                                    <Navbar.Brand href="/login" className="user"><i className="fas fa-user"></i></Navbar.Brand>
                                    <Nav.Link as={Link} to="/login">Sign in | Join</Nav.Link>
                                </>}
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default TopNavigation;