import { Form, Row, Col, Card, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

const SingleComment = ({ Comments, setComments }) => {

    const handleDelete = async (id) => {
        if (!window.confirm("Sei sicuro?")) {
            return
        }
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkMjAyOTYzZjE1ODAwMTQxMTg0NzUiLCJpYXQiOjE2OTg1MDQ3NDUsImV4cCI6MTY5OTcxNDM0NX0.RP0iwx7dtrOLNI8LQJ6uqC0M0UKPr_063xel1qtoaIg',
                    'Content-Type': 'application/json'
                },
                method: 'DELETE',
            })
            if (response.ok) {
                toast.success("Recensione eliminata con successo")
                getComments(id)
            } else {
                toast.error("Oops, qualcosa è andato storto")
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function getComments(id) {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkMjAyOTYzZjE1ODAwMTQxMTg0NzUiLCJpYXQiOjE2OTg1MDQ3NDUsImV4cCI6MTY5OTcxNDM0NX0.RP0iwx7dtrOLNI8LQJ6uqC0M0UKPr_063xel1qtoaIg"
            }
        })
        if (response.ok) {
            let comments = await response.json()
            setComments(comments)
        } else {
            console.log("error");
        }
    }

    const CardTitleWithStars = ({ rate, author }) => {
        const starIcons = [];

        for (let i = 0; i < rate; i++) {
            starIcons.push(<Icon.StarFill key={i} className="me-2 fs-6" style={{ color: "#e37400" }} />);
        }

        return (
            <div className='mb-2'>
                <p className='mb-2' style={{ fontSize: ".85rem" }}>{author}</p>
                <div>
                    {starIcons}
                </div>
            </div>
        );
    };

    return (
        <Form.Group className='mb-0'>
            {Comments
                .map(review => (
                    <Row key={review.id}>
                        <Col xs={9}>
                            <Card.Title className='fs-6' >
                                <CardTitleWithStars rate={review.rate} author={review.author} />
                                <p className='fw-normal fs-6'>{review.comment}</p>
                            </Card.Title>
                        </Col>
                        <Col xs={3}>
                            <Button variant='outline-danger w-100' onClick={() => handleDelete(review._id)}>
                                <Icon.TrashFill style={{ fontSize: "14px" }} />
                            </Button>
                        </Col>
                    </Row>
                ))}
        </Form.Group>
    )
}

export default SingleComment