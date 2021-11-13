import React from 'react';
import './SignIn.css';
import { Col, Container, Form, Row, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
//import logo
import logo from '../../../Images/drone.png';
import { Link, useHistory, useLocation } from 'react-router-dom';

const SignIn = () => {
    const { signInWithGoogle, signInWithFacebook, signInWithGithub, signInWithEmailPassword, isLoading, msg } = useAuth();
    const history = useHistory();
    const location = useLocation();
    //catch private route redirect page url
    const redirect_uri = location.state?.from || '/';

    //react hook form
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailPassword(data.email, data.password, history, redirect_uri);
    }

    return (
        <Container fluid>
            <Navigation />

            <Row className="d-flex justify-content-center mt-5">
                <Col sm={8} md={4} className="login-box px-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="text-center pt-5 pb-3">
                            <img src={logo} alt="Drone logo" height="50px" width="50px" />
                            <h2 className="fs-3 blue">Login Your Account</h2>
                        </div>
                    </div>
                    {/* preLoader add */}
                    {isLoading ? <div className="d-flex justify-content-center">
                        <Spinner animation="border" variant="primary" />
                    </div>
                        : <>
                            {msg && <div className="alert alert-danger" role="alert">
                                {msg}
                            </div>}
                            {/* login form */}
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control type="email" id="email" {...register("email")} placeholder="xyz@xy.com" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control type="password" id="password" {...register("password")} placeholder="your password" />
                                </Form.Group>
                                <div className="text-center">
                                    <Button type="submit" className="bg-blue px-5">LOGIN</Button>
                                </div>
                            </Form>
                            <div className="text-center pt-3">
                                <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
                                <p>---------------------------------------</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <button onClick={() => signInWithGoogle(history, redirect_uri)} className="d-block btn btn-outline-danger">
                                        <i className="fab fa-google pe-3"></i>
                                        Sign-in with Google
                                    </button>
                                    <button onClick={() => signInWithFacebook(history, redirect_uri)} className="d-block btn btn-outline-primary">
                                        <i className="fab fa-facebook-square pe-3"></i>
                                        Sign-in with Facebook
                                    </button>
                                    <button onClick={() => signInWithGithub(history, redirect_uri)} className="d-block btn btn-outline-dark">
                                        <i className="fab fa-github pe-3"></i>
                                        Sign-in with Github
                                    </button>
                                </div>
                            </div>
                        </> /*end preloader*/}
                </Col>
            </Row>

        </Container>
    );
};

export default SignIn;