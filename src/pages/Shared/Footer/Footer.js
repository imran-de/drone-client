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
                                        <a href="#home">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#home">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#home">Affiliate Program</a>
                                    </li>
                                    <li>
                                        <a href="#home">Authenticity Guarantee</a>
                                    </li>
                                    <li>
                                        <a href="#home">Customer Reviews</a>
                                    </li>
                                    <li>
                                        <a href="#home">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#home">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-usefull-link">
                                <span className="title">Help Center</span>
                                <ul>
                                    <li>
                                        <a href="#home">Order Information</a>
                                    </li>
                                    <li>
                                        <a href="#home">hipping Options</a>
                                    </li>
                                    <li>
                                        <a href="#home">International Shipping</a>
                                    </li>
                                    <li>
                                        <a href="#home">Payment Options</a>
                                    </li>
                                    <li>
                                        <a href="#home">Returning & Exchanging</a>
                                    </li>
                                    <li>
                                        <a href="#home">Product Warranty</a>
                                    </li>
                                    <li>
                                        <a href="#home">Repair Center</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-usefull-link">
                                <span className="title">My Account</span>
                                <ul>
                                    <li>
                                        <a href="#home">Manage Your Account</a>
                                    </li>
                                    <li>
                                        <a href="#home">Gift Cards</a>
                                    </li>
                                    <li>
                                        <a href="#home">Order Sttatus</a>
                                    </li>
                                    <li>
                                        <a href="#home">Gift Certificates</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="single-usefull-link">
                                <span className="title">Products</span>
                                <ul>
                                    <li>
                                        <a href="#home">All Drones</a>
                                    </li>
                                    <li>
                                        <a href="#home">Agriculture</a>
                                    </li>
                                    <li>
                                        <a href="#home">Media</a>
                                    </li>
                                    <li>
                                        <a href="#home">Drone Accessories</a>
                                    </li>
                                    <li>
                                        <a href="#home">Construction & Surveying</a>
                                    </li>
                                    <li>
                                        <a href="#home">Infrastructure</a>
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
                            <p className="copyright-text">Copyright © 2020. All Rights Reserved By <a href="#home">Drone</a></p>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="partners">
                                <ul>
                                    <li>
                                        <a href="#home">
                                            <img src="http://pixner.net/todas/todas-demo/assets/img/partner-1.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#home">
                                            <img src="http://pixner.net/todas/todas-demo/assets/img/partner-2.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#home">
                                            <img src="http://pixner.net/todas/todas-demo/assets/img/partner-3.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#home">
                                            <img src="http://pixner.net/todas/todas-demo/assets/img/partner-4.jpg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#home">
                                            <img src="http://pixner.net/todas/todas-demo/assets/img/partner-5.jpg" alt="" />
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