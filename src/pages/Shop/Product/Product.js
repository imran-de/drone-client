import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="row product-box">
            <div className="col-md-3">
                <img className="img-fluid" src="http://pixner.net/todas/todas-demo/assets/img/product-1.jpg" alt="" />
            </div>
            <div className="col-md-7 d-flex align-items-center pb-2">
                <div>
                    <h3>Product Name</h3>
                    <p>Product Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat voluptatum similique esse expedita voluptatibus quos et ipsum animi sint dignissimos corrupti aliquam, earum illum maiores doloremque nostrum aspernatur, fugiat in.</p>
                    <Link to="/purchase"><button className="purchase">Buy Now</button></Link>
                </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center align-items-center">
                <div>
                    <h2 style={{ color: '#0b1d97', textAlign: 'center' }}>$200</h2>
                </div>
            </div>
        </div>
    );
};

export default Product;