import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const [msg, setMsg] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const confirm = window.confirm(`are you sure to add product "${data?.productName}"`);
        if (confirm) {
            fetch('https://imran-drone.herokuapp.com/add-product', {
                method: "POST",
                headers: { 'content-type': "application/json" },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(result => {
                    console.log(result);
                    if (result?.insertedId) {
                        setMsg(`WOW! The product ${data?.productName} now in product list.`)
                    } else {
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
                            <h2 className="fs-3 blue">ADD A PRODUCT</h2>
                            {
                                msg && <div className="alert alert-success mt-3" role="alert">
                                    {msg}
                                </div>
                            }
                        </div>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="product-name">Product Name</Form.Label>
                            <Form.Control type="text" id="product-name" {...register("productName")} placeholder="Product Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="price">Price($)</Form.Label>
                            <Form.Control type="number" id="price" {...register("price")} placeholder="$ 200" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="product-image">Product Image URL</Form.Label>
                            <Form.Control type="text" id="product-image" {...register("productURL")} placeholder="product image url" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="product-description">Description</Form.Label>
                            <Form.Control as="textarea" id="description" {...register("description")} placeholder="Product details" required />
                        </Form.Group>
                        <div className="text-center">
                            <Button type="submit" className="bg-blue px-5">ADD PRODUCT</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;