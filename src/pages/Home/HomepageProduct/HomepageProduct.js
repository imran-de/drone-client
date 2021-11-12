import React, { useEffect, useState } from 'react';
import './HomepageProduct.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomepageProduct = () => {
    const [products, setProducts] = useState([]);
    const productLimit = 6;
    useEffect(() => {
        fetch(`http://localhost:5000/products?limit=${productLimit}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-sm-10 col-md-8">
                    <div className="product-title text-center">
                        <span className="product-subtitle">World's most advanced drones</span>
                        <h2 className="fs-1 fw-bolder text-center">Trending Products</h2>
                        <p>With new trends constantly coming up, we've decided to freshen up this list with the trending products to sell {products?.length}</p>
                    </div>
                </div>
            </div>

            {/* showing six product */}
            {
                products?.map(product => <div
                    key={product?._id}
                    className="row product-box">
                    <div className="col-md-3">
                        <img className="img-fluid" src={product?.productURL} alt="" />
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h3>{product?.productName}</h3>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                        <div>
                            <h2 style={{ color: '#0b1d97', textAlign: 'center' }}>${product?.price}</h2>
                            <Link to={`/purchase/${product?._id}/${product?.productName}`}><button className="purchase">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
                )}

        </Container>
    );
};

export default HomepageProduct;