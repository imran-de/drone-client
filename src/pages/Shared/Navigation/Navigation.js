import React from 'react';
//import css file
import './Navigation.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// logo import
import logo from '../../../Images/drone.png';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user } = useAuth();
    return (
        <Navbar bg="" expand="lg">
            <Container className="header">
                <Navbar.Brand as={Link} to="/"><img className="site-logo" src={logo} alt="The drone logo" /> Drone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" ><i className="fas fa-bars text-light"></i></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        {user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;