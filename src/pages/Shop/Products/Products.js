import React, { useEffect, useState } from 'react';
import './Products.css';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://imran-drone.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container className="my-5">
            <Row xs={1} md={2} className="g-4">
                <Col sm={12} md={10} lg={8}>
                    <div className="products-container">
                        {
                            products?.map(product => <Product
                                key={product?._id}
                                product={product}
                            >

                            </Product>)
                        }
                    </div>
                </Col>
                <Col sm={12} md={2} lg={4}>
                    <div className="shopping-cart">
                        <h3 className="fw-bold">Shopping Cart</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Products;