import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import fantasy from '../Books/history.json'
import SingleBook from "./SingleBook";

let i = 0

const MyFunction = () => {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <>
            <h1 className="mb-4">Books</h1>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Control
                            type="search"
                            placeholder="Cerca un Libro..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="g-2 mt-3">
                {fantasy
                    .slice(0,12)
                    .filter((b) => b.title.toLowerCase()
                    .includes(searchQuery))
                    .map((books) => (
                        <Col
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className="mb-4"
                            key={books.asin}
                        >
                            <SingleBook book={books} />
                        </Col>
                    ))}
            </Row>
        </>
    )
}

export default MyFunction