import Container from 'react-bootstrap/Container';
import * as Icon from 'react-bootstrap-icons'

function MyFooter() {
        return (
            <Container className='mt-5'>
                <footer className="footer bg-body-tertiary py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h3 className="footer-title">About Us</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                    pellentesque nisi sed lacus lacinia, eget tristique lacus
                                    consectetur.
                                </p>
                            </div>
                            <div className="col-md-4">
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
                            </div>
                            <div className="col-md-4">
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
                            </div>
                        </div>
                        <div className="footer-copyright">
                            <p style={{ fontSize: "12px" }}>Copyright &copy; 2023 Example Company. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </Container>
        )
}

export default MyFooter;