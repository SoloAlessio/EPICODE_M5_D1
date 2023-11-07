import { Button, Form, Row, Col, Container } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { useState, useEffect } from 'react';

const AddComment = ({ selected }) => {

    const [comment, setComment] = useState({
        comment: "",
        rate: 1,
        elementId: null,
    })

    useEffect(() => {
        setComment((c) => ({
            ...c,
            elementId: selected,
        }))
    }, [selected])

    const Submit = async (e) => {
        e.preventDefault()

        try {
            let response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkMjAyOTYzZjE1ODAwMTQxMTg0NzUiLCJpYXQiOjE2OTg1MDQ3NDUsImV4cCI6MTY5OTcxNDM0NX0.RP0iwx7dtrOLNI8LQJ6uqC0M0UKPr_063xel1qtoaIg',
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify(comment)
                })
            if (response.ok) {
                alert("INVIATA")
                setComment({
                    comment: "",
                    rate: 1,
                    elementId: null,
                })
            } else {
                alert("ERRORE")
            }
        } catch (error) {
            alert(error)
        }


    }

    return (
        <Form onSubmit={Submit}>
            <Form.Group>
                <Container fluid className='mb-3 px-0'>
                    <Row>
                        <Col md={4} className='d-flex align-items-center mb-3 mb-md-0'>
                            <Icon.StarFill className='me-2' style={{color: "#e37400", fontSize: "1rem"}}/>
                            <p className='mb-0 font-weight-bold'>{comment.rate}</p>
                        </Col>
                        <Col md={8} className='d-flex align-items-center'>
                            <Form.Control
                                type='range'
                                id="Slider"
                                max={5}
                                value={comment.rate}
                                onChange={(e) => setComment({
                                    ...comment,
                                    rate: e.target.value,
                                })}
                            />
                        </Col>
                    </Row>
                </Container>
                <Form.Control
                    type="text"
                    value={comment.comment}
                    onChange={(e) => setComment({
                        ...comment,
                        comment: e.target.value,
                    })}
                    placeholder="Inserisci il tuo commento"
                    className='mb-3'
                />
                <Button
                    type='submit'
                    variant="primary"
                    className="w-100"
                >Invia</Button>
            </Form.Group>
        </Form>
    )
}

export default AddComment

