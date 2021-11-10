import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';

const Purchase = () => {
    return (
        <>
            <div className="bg-dark"><TopNavigation /></div>
            <Navigation />
            <h2>Purchase</h2>

            <Footer />
        </>
    );
};

export default Purchase;