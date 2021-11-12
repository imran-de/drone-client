import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://imran-drone.herokuapp.com/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
    }, [user?.email])

    //handle delete
    const handleCancel = (id) => {
        const confirm = window.confirm("Are you sure to cancel the order?");
        if (confirm) {
            fetch(`https://imran-drone.herokuapp.com/order/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert("order canceled successfully")
                        const remainOrders = orders?.filter(order => order?._id !== id);
                        setOrders(remainOrders);
                    } else {
                        alert("unsuccessful to cancel the order, try latter");
                    }
                })
        }
    }
    return (
        <Container className="my-5">
            <div className="d-flex justify-content-between">
                <h2 className="fs-1 blue">My Orders</h2>
                <h2 className="blue">Total: {orders?.length}</h2>
            </div>
            {/* preloader */}
            {loading && <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>}

            {!loading && <>
                {orders?.length > 0 ? <>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Order Date</th>
                                <th>Product Name</th>
                                <th>Contact No.</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, key) => <tr
                                    key={order?._id}
                                >
                                    <td>{key}</td>
                                    <td>{order?.orderTime}</td>
                                    <td>{order?.productName}</td>
                                    <td>{order?.contact}</td>
                                    <td>{order?.address}</td>
                                    <td>{order?.status}</td>
                                    <td>
                                        <button onClick={() => handleCancel(order?._id)} className="btn btn-danger">Cancel</button>
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </Table>
                </> : <>
                    <h2>Your Order Cart is empty, <Link to='/shop'>Shop now</Link></h2>
                </>}
            </>}
        </Container>
    );
};

export default MyOrders;