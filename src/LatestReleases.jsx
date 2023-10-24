import { Col, Container, Row } from "react-bootstrap";
import fantasy from './Books/fantasy.json'

export default function MyFunction() {
    return (
        <Container>
            <h1 className="mb-4">Books</h1>
            <Row className="row-gap-1">
                {fantasy.slice(6, 18).map((books) => (
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <img 
                            src={books.img} 
                            alt={books.title} 
                            className="shadow rounded-lg img-fluid"
                            style={{height: '100%'}}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}