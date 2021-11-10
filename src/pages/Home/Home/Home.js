import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Feature from '../Feature/Feature';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomepageProduct from '../HomepageProduct/HomepageProduct';
import HomepageReview from '../homepageReview/HomepageReview';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Feature />
            <HomepageProduct />
            <HomepageReview />
            <Footer />
        </div>
    );
};

export default Home;