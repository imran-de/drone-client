import React, { useEffect, useState } from 'react';
import './HomepageProduct.css'
import { Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const HomepageProduct = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const productLimit = 6;
    useEffect(() => {
        fetch(`https://imran-drone.herokuapp.com/products?limit=${productLimit}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container className="mb-5">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-sm-10 col-md-8">
                    <div className="product-title text-center">
                        <span className="product-subtitle">World's most advanced drones</span>
                        <h2 className="fs-1 fw-bolder text-center">Trending Products</h2>
                        <p>With new trends constantly coming up, we've decided to freshen up this list with the trending products to sell</p>
                    </div>
                </div>
            </div>

            {/* showing six product */}
            {
                products?.map(product => <div
                    key={product?._id}
                    className="row product-box">
                    <div className="col-md-3  d-flex justify-content-center">
                        <img className="product-image" src={product?.productURL} alt="" />
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
            <div className="text-center pt-3">
                <button onClick={() => history.replace('/shop')} className="btn btn-outline-warning">MORE DRONE</button>
            </div>
        </Container>
    );
};

export default HomepageProduct;