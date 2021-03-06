import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import PageBanner from '../Shared/PageBanner/PageBanner';
import Star from '../Shared/Star/Star';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    //load reviews
    useEffect(() => {
        fetch('https://imran-drone.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <>
            <PageBanner pageTitle="Our Happy Customer What Say"></PageBanner>
            <Container className="my-5">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {/* map in array */}
                    {reviews?.map(review => <div
                        key={review?._id}
                        className="col"
                    >
                        <Card className="h-100 product-box">
                            <div className="d-flex justify-content-center align-items-center pt-3">
                                <Card.Img src={review?.photoURL} style={{ borderRadius: '50%', width: "65px", height: "65px" }} />
                            </div>
                            <Card.Body className="text-center">
                                <Card.Title>{review?.name}</Card.Title>
                                <p className="text-uppercase fw-bold">{review?.profession}</p>
                                <Star star={review?.rating}></Star>
                                <Card.Text>
                                    {review?.comment}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    )}

                </div>

            </Container>
            <Footer />
        </>
    );
};

export default Reviews;