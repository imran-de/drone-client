import React from 'react';
//css file import
import './HomePageBanner.css'
import { Container } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <Container fluid className="home-page-banner">
            <TopNavigation />
            <Navigation />
            <img className="banner-animation animation-1" src="https://i.ibb.co/Y7RQZxq/drone-1.png" alt="" />
            <img className="banner-animation animation-3" src="https://i.ibb.co/8rnSSKy/man-1.png" alt="" />
            <Container>
                <div className="row justify-content-xl-start justify-content-lg-center justify-content-start">
                    <div className="col-xl-8 col-lg-9 col-md-10">
                        <div className="banner-content">
                            <h1>Professional  Drone For  Every Business</h1>
                            <p>Welcome to the best drone website in the world.We have the most up-to-date information on drones for sale and new products everyday. Shop now!</p>
                            <div className="banner-buttons">
                                <Link className="banner-button" to="/shop">buy now</Link>
                                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=e8eSfqaaGXQ&list=RDe8eSfqaaGXQ&start_radio=1">
                                    <span className="icon banner-button">
                                        <i className="fas fa-play"></i>
                                    </span>
                                    <span className="text">how it works?</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default HomeBanner;