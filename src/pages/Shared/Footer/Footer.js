import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="news-letter">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-sm-10">
                            <div className="section-title section-title-2">
                                <h2>Subcriber For Newsletter</h2>
                                <p> Be the first to know about sales & offers, new arrivals, latest trends, <br />
                                    events, brand news, and more.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <form>
                                <input type="email" placeholder="Enter your email address" />
                                <button>Subcribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="link-area">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-usefull-link">
                                <span className="title">Company Info</span>
                                <ul>
                                    <li>
                                        <a href="/about">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/careers">Careers</a>
                                    </li>
                                    <li>
                                        <a href="/affiliate">Affiliate Program</a>
                                    </li>
                                    <li>
                                        <a href="/guarantee">Authenticity Guarantee</a>
                                    </li>
                                    <li>
                                        <a href="/reviews">Customer Reviews</a>
                                    </li>
                                    <li>
                                        <a href="/policy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/conditions">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-usefull-link">
                                <span className="title">Help Center</span>
                                <ul>
                                    <li>
                                        <a href="/dashboard/my-orders">Order Information</a>
                                    </li>
                                    <li>
                                        <a href="/shop">hipping Options</a>
                                    </li>
                                    <li>
                                        <a href="#shipping-places">International Shipping</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/pay">Payment Options</a>
                                    </li>
                                    <li>
                                        <a href="#privacy">Returning & Exchanging</a>
                                    </li>
                                    <li>
                                        <a href="/waranty">Product Warranty</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Repair Center</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-usefull-link">
                                <span className="title">My Account</span>
                                <ul>
                                    <li>
                                        <a href="/dashboard">Manage Your Account</a>
                                    </li>
                                    <li>
                                        <a href="#cards">Gift Cards</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/my-orders">Order Status</a>
                                    </li>
                                    <li>
                                        <a href="/gift">Gift Certificates</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-usefull-link">
                                <span className="title">Products</span>
                                <ul>
                                    <li>
                                        <a href="/shop">All Drones</a>
                                    </li>
                                    <li>
                                        <a href="/shop">Best Collection</a>
                                    </li>
                                    <li>
                                        <a href="/Media">Media</a>
                                    </li>
                                    <li>
                                        <a href="/blog">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/Construction">Construction & Surveying</a>
                                    </li>
                                    <li>
                                        <a href="/Infrastructure">Infrastructure</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="foot-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <p className="copyright-text">Copyright © 2021. All Rights Reserved By <a href="/">Drone</a>. Developed by <a className="fw-bolder" href="#imran">IMRAN AHMED</a></p>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="partners">
                                <ul>
                                    <li>
                                        <a href="#home">
                                            <img src="https://i.ibb.co/3zhpYdg/partner-1.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#home">
                                            <img src="https://i.ibb.co/MCKbrjN/partner-2.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#home">
                                            <img src="https://i.ibb.co/GP6TZ4j/partner-3.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#home">
                                            <img src="https://i.ibb.co/5Ypb7qk/partner-4.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#home">
                                            <img src="https://i.ibb.co/gDwgGLr/partner-5.jpg" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;