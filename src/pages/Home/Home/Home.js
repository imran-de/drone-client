import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import EasyToUse from '../EasyToUse/EasyToUse';
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
            <EasyToUse />
            <HomepageReview />
            <Footer />
        </div>
    );
};

export default Home;