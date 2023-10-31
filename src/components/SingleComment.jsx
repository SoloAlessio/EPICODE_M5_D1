import { Form, Row, Col, Card } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

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
                            <Card.Title className='fs-6' >
                                <CardTitleWithStars rate={review.rate} author={review.author} />
                                <p className='fw-normal'>{review.comment}</p>
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
        starIcons.push(<Icon.StarFill key={i} className="me-2 fs-6" style={{color: "#e37400"}} />);
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