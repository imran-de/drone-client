import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, productName, productURL, price, description } = product;
    return (
        <div className="row product-box">
            <div className="col-md-3">
                <img className="img-fluid" src={productURL} alt="" />
            </div>
            <div className="col-md-7 d-flex align-items-center pb-2">
                <div>
                    <h3>{productName}</h3>
                    <p>{description}</p>
                    <Link to={`/purchase/${_id}/${productName}`}>
                        <button className="purchase">Buy Now</button>
                    </Link>
                </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center align-items-center">
                <div>
                    <h2 style={{ color: '#0b1d97', textAlign: 'center' }}>${price}</h2>
                </div>
            </div>
        </div>
    );
};

export default Product;