import { Container, Row, Col } from 'react-bootstrap';

export default function NotFound() {

    return (
        <Container className='my-5'>
            <Row>
                <Col xs={12} md={4} className='mx-auto'>
                    <h1 className='text-center'>404</h1>
                    <h5 className='text-center'>Not Found</h5>
                </Col>
            </Row>
        </Container>
    )
}