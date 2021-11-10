import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Products from '../Products/Products';
import ShopPageBanner from '../ShopPageBanner/ShopPageBanner';

const Shop = () => {
    return (
        <div>
            <ShopPageBanner />
            <Products />

            <Footer />
        </div>
    );
};

export default Shop;