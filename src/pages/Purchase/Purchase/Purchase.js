import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';

const Purchase = () => {
    const { id } = useParams();

    const { user } = useAuth();

    const [msg, setMsg] = useState('');
    const [product, setProduct] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    //load selected product details
    useEffect(() => {
        fetch(`https://imran-drone.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    // handle confirm order
    const onSubmit = data => {
        //set order time date, product id and product name
        const orderDate = new Date().toLocaleString();
        data.productId = product?._id;
        data.productName = product?.productName;
        data.status = 'pending';
        data.orderTime = orderDate;

        const confirm = window.confirm(`are you sure to confirm order`);
        if (confirm) {
            fetch('https://imran-drone.herokuapp.com/add-order', {
                method: "POST",
                headers: { 'content-type': "application/json" },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(result => {
                    if (result?.insertedId) {
                        alert('WOW! The product order complete. you can see it on order page');
                        setMsg(`WOW! The product order complete. you can see it on order page`);
                    } else {
                        alert("Something error! please try again later!");
                        setMsg("Something error! please try again later!");
                    }
                    reset();
                })
        }
    }


    return (
        <>
            <div className="bg-dark"><TopNavigation /></div>
            <Navigation />
            <Container className="my-5">
                {
                    msg && <div className="alert alert-success mt-3" role="alert">
                        {msg}
                    </div>
                }
                <Row>
                    <Col md={6}>
                        <Row className="product-box p-3">
                            <h2>Product Details:</h2>
                            <h4>{product?.productName}</h4>
                            <h6 style={{ color: '#0b1d97' }}>Price: ${product?.price}</h6>
                            <p>{product?.description}</p>

                        </Row>
                    </Col>
                    {/* purchase confirm form */}
                    <Col md={6}>
                        <Row className="product-box p-3">
                            <h2>Confirm Order:</h2>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="name">Full Name</Form.Label>
                                    <Form.Control type="text" defaultValue={user?.displayName} id="name" {...register("name")} placeholder="Name" required readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="contact">CONTACT NO.</Form.Label>
                                    <Form.Control type="text" id="contact" {...register("contact")} placeholder="contact Number" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control type="email" id="email" defaultValue={user?.email} {...register("email")} placeholder="Email" required readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="price">QUANTITY</Form.Label>
                                    <Form.Control type="number" id="quantity" min="1" max="20" {...register("quantity")} placeholder="0" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="address">ADDRESS</Form.Label>
                                    <Form.Control as="textarea" id="address" {...register("address")} placeholder="Delivery address" required />
                                </Form.Group>
                                <div className="text-center">
                                    <Button type="submit" className="bg-blue px-5">CONFIRM ORDER</Button>
                                </div>
                            </Form>

                        </Row>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
};

export default Purchase;