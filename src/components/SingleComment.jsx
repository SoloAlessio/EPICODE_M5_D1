import { Form, Row, Col, Card } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'

const SingleComment = ({ Comments }) => {

    return (
        <Form.Group className='mb-0'>
            <Row>
                {Comments
                    .map(review => (
                        <Col
                            md={12}
                            key={review._id}
                        >
                            <Card.Title style={{ fontSize: "1rem" }} >
                                <CardTitleWithStars rate={review.rate} author={review.author} />
                                <p className='font-weight-normal'>{review.comment}</p>
                            </Card.Title>
                        </Col>
                    ))}

            </Row>
        </Form.Group>
    )
}

const CardTitleWithStars = ({ rate, author }) => {
    const starIcons = [];

    for (let i = 0; i < rate; i++) {
        starIcons.push(<Icon.StarFill key={i} className="mr-2" style={{color: "#e37400", fontSize: "1rem"}} />);
    }

    return (
        <div className='mb-2'>
            <p className='mb-2' style={{fontSize: ".85rem"}}>{author}</p>
            <div>
                {starIcons}
            </div>
        </div>
    );
};

export default SingleComment