import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [msg, setMsg] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.photoURL = user?.photoURL;
        const confirm = window.confirm(`are you sure to add review`);
        if (confirm) {
            fetch('https://imran-drone.herokuapp.com/add-review', {
                method: "POST",
                headers: { 'content-type': "application/json" },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(result => {
                    if (result?.insertedId) {
                        alert("your review recorded successfully")
                        setMsg(`WOW! your review recorded.`)
                    } else {
                        alert("sorry! you review can't record this time try latter");
                        setMsg("Something error! please try again later!");
                    }
                    reset();
                })
        }
    }
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col sm={12} md={8} className="row-box px-5 pb-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="text-center pt-5 pb-3">
                            <h2 className="fs-3 blue">ADD YOUR REVIEW</h2>
                            {
                                msg && <div className="alert alert-success mt-3" role="alert">
                                    {msg}
                                </div>
                            }
                        </div>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="name">Full Name</Form.Label>
                            <Form.Control type="text" id="product-name" defaultValue={user?.displayName} {...register("name")} placeholder="Full Name" readOnly required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="profession">Profession</Form.Label>
                            <Form.Control type="text" id="profession" {...register("profession")} placeholder="Profession" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="price">Rate (1 to 5)</Form.Label>
                            <Form.Control type="number" min="1" max="5" id="rating" {...register("rating")} placeholder="5" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="comment">Comment</Form.Label>
                            <Form.Control as="textarea" id="comment" {...register("comment")} placeholder="write your review comment" required />
                        </Form.Group>
                        <div className="text-center">
                            <Button type="submit" className="bg-blue px-5">ADD MY REVIEW</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Review;