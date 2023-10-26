import * as Icon from 'react-bootstrap-icons'
import { Row, Col, Container } from 'react-bootstrap'

const MyFooter = () => (
    <Container fluid>
        <footer className="bg-body-tertiary py-3 mt-5">
                <Row>
                    <Col md={4}>
                        <h3 className="footer-title">About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            pellentesque nisi sed lacus lacinia, eget tristique lacus
                            consectetur.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h3 className="footer-title">Contact Us</h3>
                        <ul className="footer-contact pl-0">
                            <li>
                                <a href="#">
                                    <Icon.Map className='mr-3' />
                                    123 Main Street, Anytown, CA 12345
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Icon.Phone className='mr-3' />
                                    (123) 456-7890
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Icon.Envelope className='mr-3' />
                                    info@example.com
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h3 className="footer-title">Follow Us</h3>
                        <div className="footer-social d-flex">
                            <a href="#" className='mr-3'>
                                <Icon.Twitter />
                            </a>

                            <a href="#" className='mr-3'>
                                <Icon.Instagram />
                            </a>

                            <a href="#" className='mr-3'>
                                <Icon.Facebook />
                            </a>
                        </div>
                    </Col>
                </Row>
                <div className="footer-copyright">
                    <p style={{ fontSize: "12px" }}>Copyright &copy; 2023 Example Company. All rights reserved.</p>
                </div>
        </footer>
    </Container>
)

export default MyFooter;