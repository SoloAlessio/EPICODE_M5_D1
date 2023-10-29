import { Button, Container, Row, Col } from 'react-bootstrap'

const Welcome = () => (
    <Container className="py-5">
        <Row className="mb-4 align-items-center flex-lg-row-reverse">
            <Col
                md={6}
                xl={7}
                className="mb-4 mb-lg-0 pr-0"
            >
                <div className="lc-block position-relative">
                    <img
                        className="img-fluid"
                        src="https://static-00.iconduck.com/assets.00/react-illustration-2048x1351-b90lu9jr.png" 
                    />
                </div>
            </Col>
            <Col
                md={6}
                xl={5}
                className='pl-0'
            >
                <div className="lc-block mb-3">
                    <div editable="rich">
                        <h1 className="fw-bolder display-2">React JS</h1>
                    </div>
                </div>
                <div className="lc-block mb-4">
                    <div editable="rich">
                        <p className="lead">
                            La mia prima applicazione React
                        </p>
                    </div>
                </div>
                <div className="lc-block">
                    <Button variant='secondary p-2' className='btn-lg' role="button">GitHub</Button>
                </div>
            </Col>
        </Row>
    </Container>
)

export default Welcome