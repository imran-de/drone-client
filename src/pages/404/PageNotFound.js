import React from 'react';
import { Container } from 'react-bootstrap';
import PageBanner from '../Shared/PageBanner/PageBanner';
import Footer from '../Shared/Footer/Footer';
import { useHistory } from 'react-router';

const PageNotFound = () => {
    const history = useHistory();

    return (
        <>
            <PageBanner pageTitle="Not Found Page"></PageBanner>
            <Container className="my-5 position-relative">
                <div className="d-flex justify-content-center position-relative">
                    <img className="img-fluid" src="https://i.ibb.co/xKbGm4J/error.png" alt="" />
                    <div className="text-center" style={{ position: 'absolute', bottom: '0px' }}>
                        <h2 className="fs-md-1 blue">Oops... It looks like you 're lost !</h2>
                        <p>The page you were looking for dosen't exist.</p>
                    </div>
                </div>

                <div className="text-center">
                    <button onClick={() => history.go(-1)} className="purchase">GO BACK</button>
                </div>
            </Container>

            <Footer />
        </>
    );
};

export default PageNotFound;