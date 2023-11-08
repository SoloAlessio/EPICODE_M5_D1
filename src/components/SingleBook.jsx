import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import context from "../context/SearchContext";
import * as Icon from 'react-bootstrap-icons'

const SingleBook = ({ book, selected, setSelected }) => {

    const theme = useContext(context)

    return (
        <Card className="border-0 h-100" style={{ backgroundColor: theme === "light" ? '#fff' : '#121212' }}>
            <Card
                onClick={() => setSelected(book.asin)}
                style={{ border: selected === book.asin ? '2px solid #bb212450' : theme === 'light' ? '2px solid #f6f6f7' : '2px solid #252525' }}
                bg={theme}
                className="p-3"
                id="Book"
            >
                <Card.Img
                    src={book.img}
                    style={{ height: "70%", objectFit: "cover", borderRadius: "8px" }}
                    className="shadow"
                />
                <Card.Body className="px-0 d-flex flex-column justify-content-between">
                    <Card.Title
                        className="TextCut"
                        style={{ color: theme === 'light' ? '#252525' : '#fff', fontSize: "1rem" }}
                    >
                        {book.title}
                    </Card.Title>
                    <Card.Text style={{ color: theme === 'light' ? '#252525' : '#fff' }}>
                        $ {book.price}
                    </Card.Text>
                    <Container fluid>
                        <Row>
                            <Col md={2} className='px-0'>
                                <Button variant='primary w-100'><Icon.CartCheckFill /></Button>
                            </Col>
                            <Col md={10} className='pe-0'>
                                <Link to={`bookDetail/${book.category}/${book.asin}`} className='text-decoration-none'>
                                    <Button variant='outline-primary w-100'>Detail</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Card>
    )
}

export default SingleBook