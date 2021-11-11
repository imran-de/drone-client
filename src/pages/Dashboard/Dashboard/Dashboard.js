import React from 'react';
import './Dashboard.css';
import { Container, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import Pay from '../Pay/Pay';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, isAdmin, logOut } = useAuth();
    return (
        <Container fluid>
            <TopNavigation />
            <Navigation />
            <Container>
                {/* profile toggle */}
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <i className="fas fa-bars"></i> Menu
                </button>


                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title blue fw-bolder">{user?.displayName}</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body link-area">
                        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Admin Menu</h5>
                        <div className="single-usefull-link">
                            <ul className="dashboard-nav">
                                <li>
                                    <Link to={`${url}/pay`}><i className="fas fa-angle-right"></i> Pay</Link>
                                </li>
                                <li>
                                    <Link to={`${url}/my-orders`}><i className="fas fa-angle-right"></i> My Orders</Link>
                                </li>
                                <li>
                                    <Link to={`${url}/review`}><i className="fas fa-angle-right"></i> Review</Link>
                                </li>
                                {/* for admin user */}
                                <li>
                                    <Link to={`${url}/manage-all-orders`}><i className="fas fa-angle-right"></i> Manage All Orders</Link>
                                </li>
                                <li>
                                    <Link to={`${url}/add-product`}><i className="fas fa-angle-right"></i> Add A Product</Link>
                                </li>
                                <li>
                                    <Link to={`${url}/make-admin`}><i className="fas fa-angle-right"></i> Make Admin</Link>
                                </li>
                                <li>
                                    <Link to={`${url}/manage-products`}><i className="fas fa-angle-right"></i> Manage Products</Link>
                                </li>
                                <Button onClick={logOut} className="btn btn-danger mt-4">LogOut</Button>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* main dashboard part */}
                <Switch>
                    <Route exact path={path}>

                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/*`}>

                    </Route>
                </Switch>
            </Container>
            <Footer />
        </Container>
    );
};

export default Dashboard;