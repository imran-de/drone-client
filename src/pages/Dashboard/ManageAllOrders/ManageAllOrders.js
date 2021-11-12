import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [statusUpdate, setStatusUpdate] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://imran-drone.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
    }, [statusUpdate])

    //handleStatus
    const handleStatus = (id, status) => {
        const confirm = window.confirm("Are you sure to change order status?");
        if (confirm) {
            setStatusUpdate(false);
            fetch(`https://imran-drone.herokuapp.com/order?id=${id}&status=${status}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
            })
                .then(res => res.json())
                .then(result => {
                    if (result.modifiedCount > 0) {
                        setStatusUpdate(true)
                        alert("order status update successfully")
                    } else {
                        alert("unsuccessful to change order status, try latter");
                    }
                })
        }
    }

    //handle delete
    const handleCancel = id => {
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
                <h2 className="fs-1 blue">Manage All Orders</h2>
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
                                <th>Phone</th>
                                <th>Email</th>
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
                                    <td>{key + 1}</td>
                                    <td>{order?.orderTime}</td>
                                    <td>{order?.productName}</td>
                                    <td>{order?.contact}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.address}</td>
                                    <td><button className="btn bg-blue">{order?.status}</button></td>
                                    <td>
                                        <button onClick={() => handleStatus(order?._id, order?.status)} className="btn btn-secondary me-4">change status</button>
                                        <button onClick={() => handleCancel(order?._id)} className="btn btn-danger">Cancel</button>
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </Table>
                </> : <>
                    <h2>You can't get any order yet! keep marketing well</h2>
                </>}
            </>}
        </Container>
    );
};

export default ManageAllOrders;