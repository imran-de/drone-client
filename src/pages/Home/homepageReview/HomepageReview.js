import React, { useEffect, useState } from 'react';
import './HomepageReview.css';
import { Card, Carousel, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Star from '../../Shared/Star/Star';

const HomepageReview = () => {
    const history = useHistory();
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
        <div className="review">
            <Container fluid>
                <div className="review-section mb-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-sm-10 col-md-8">
                            <div className="section-title text-center">
                                <span className="subtitle">TESTIMONIALS</span>
                                <h2 className="fs-1 fw-bolder text-center">What People Are Saying</h2>
                                <p>Some Impresions from our customers! Please read some of the lovely things our customers say about us.</p>
                            </div>
                        </div>
                    </div>
                    {/* review slider */}
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <Carousel>

                                {
                                    reviews?.map(review => <Carousel.Item
                                        key={review?._id}
                                    >
                                        <div className="slider d-flex justify-content-center">
                                            <Card className="h-100">
                                                <div className="d-flex justify-content-center align-items-center pt-3">
                                                    <Card.Img variant="top" src={review?.photoURL} />
                                                </div>
                                                <Card.Body className="text-center">
                                                    <Card.Title>{review?.name}</Card.Title>
                                                    <span className="text-uppercase">{review?.profession}</span>
                                                    <Star star={review?.rating}></Star>
                                                    <Card.Text className="px-lg-5">
                                                        {review?.comment.substr(0, 150)}
                                                        {review?.comment?.length > 150 && <> ...</>}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Carousel.Item>

                                    )
                                }


                            </Carousel>

                            <div className="text-center pt-3">
                                <button onClick={() => history.replace('/reviews')} className="btn btn-outline-success">SEE ALL REVIEW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomepageReview;