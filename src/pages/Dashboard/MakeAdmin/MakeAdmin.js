import React, { useState } from 'react';
import { Container, Form, Row, Button, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [msg, setMsg] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const { token } = useAuth();
    const onSubmit = data => {
        const confirm = window.confirm(`are you sure to make admin "${data?.email}"`);
        if (confirm) {
            fetch('https://imran-drone.herokuapp.com/users/admin', {
                method: "POST",
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': "application/json"
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(result => {
                    if (result?.modifiedCount > 0) {
                        setMsg(`WOW! The user ${data?.email} now admin.`)
                    } else {
                        setMsg(result?.message);
                    }
                    reset();
                })
        }
    }

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col sm={8} md={4} className="row-box px-4 pb-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="text-center pt-5 pb-3">
                            <h2 className="fs-3 blue">MAKE A NEW ADMIN</h2>
                            {
                                msg && <div className="alert alert-danger" role="alert">
                                    {msg}
                                </div>
                            }
                        </div>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control type="email" id="email" {...register("email")} placeholder="xyz@xy.com" required />
                        </Form.Group>
                        <div className="text-center">
                            <Button type="submit" className="bg-blue px-5">MAKE ADMIN</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;