import React from 'react';


const ManageProduct = ({ product, handleDelete }) => {
    const { _id, productName, price, productURL, description } = product;

    return (
        <div className="row product-box">
            <div className="col-md-3">
                <img className="img-fluid" src={productURL} alt="" />
            </div>
            <div className="col-md-7 d-flex align-items-center">
                <div>
                    <h3>{productName}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center align-items-center">
                <div>
                    <h2 style={{ color: '#0b1d97', textAlign: 'center' }}>${price}</h2>
                    <button onClick={() => handleDelete(_id, productName)} className="btn btn-danger">DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;