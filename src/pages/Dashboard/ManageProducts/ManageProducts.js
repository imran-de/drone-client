import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ManageProduct from '../manageProduct/ManageProduct';

const ManageProducts = () => {
    const [msg, setMsg] = useState('');
    const [products, setProducts] = useState([]);
    //load all products
    useEffect(() => {
        fetch('https://imran-drone.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    //handle Delete
    const handleDelete = (id, name) => {
        const confirm = window.confirm(`Are you sure to delete "${name}"`)
        if (confirm) {
            fetch(`https://imran-drone.herokuapp.com/product/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" }

            })
                .then(res => res.json())
                .then(result => {
                    if (result?.deletedCount > 0) {
                        setMsg("Product deleted successfully");
                        const restProduct = products.filter(product => product?._id !== id);
                        setProducts(restProduct);
                    }
                })
        }
    }
    return (
        <Container className="my-5">
            <div className="d-flex justify-content-between">
                <h2 className="fs-1 blue">Manage All Products</h2>
                <h2 className="blue">Total: {products?.length}</h2>
            </div>
            {msg && <div className="alert alert-success" role="alert">
                {msg}
            </div>}
            {
                products?.map(product => <ManageProduct
                    key={product._id}
                    product={product}
                    handleDelete={handleDelete}
                ></ManageProduct>
                )
            }
        </Container>
    );
};

export default ManageProducts;