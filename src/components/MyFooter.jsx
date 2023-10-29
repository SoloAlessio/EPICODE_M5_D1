import * as Icon from 'react-bootstrap-icons'
import { Row, Col, Container } from 'react-bootstrap'

const MyFooter = () => (
    <section className="bg-light text-dark">
        <Container className="py-5">
            <Row>
                <Col lg={3} className='mb-4 mb-md-0'>
                    <div className="lc-block mb-4">
                        <img className="img-fluid" alt="logo" src="https://cdn.livecanvas.com/media/svg/undraw-sample/undraw_connected_world_wuay.svg" style={{ maxHeight: "10vh" }} />
                    </div>
                    <div className="lc-block small">
                        <div editable="rich">
                            <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper matti pibus leo.</p>
                        </div>
                    </div>
                    <div className="lc-block py-2">
                        <a className="text-decoration-none mr-3" href="#">
                            <Icon.Facebook width={"1rem"} height={"1rem"} fill='#343a40'/>
                        </a>
                        <a className="text-decoration-none mr-3" href="#">
                            <Icon.Instagram width={"1rem"} height={"1rem"} fill='#343a40'/>
                        </a>
                        <a className="text-decoration-none mr-3" href="#">
                            <Icon.Twitter width={"1rem"} height={"1rem"} fill='#343a40'/> 
                        </a>
                        <a className="text-decoration-none mr-3" href="#">
                            <Icon.Youtube width={"1rem"} height={"1rem"} fill='#343a40'/>
                        </a>
                        <a className="text-decoration-none mr-3" href="#">
                            <Icon.Linkedin width={"1rem"} height={"1rem"} fill='#343a40'/>
                        </a>
                    </div>

                </Col>
                <Col lg={2} className="offset-lg-1">
                    <div className="lc-block mb-4">
                        <div editable="rich">
                            <h4>Get Started</h4>
                        </div>
                    </div>
                    <div className="lc-block small">
                        <div editable="rich">
                            <p>Tutorial</p>
                            <p>Resources
                                <br />
                            </p>
                            <p>Docs</p>
                            <p>Example</p>
                        </div>
                    </div>
                </Col>
                <Col lg={2} className="offset-lg-1">
                    <div className="lc-block mb-4">
                        <div editable="rich">
                            <h4>About us</h4>
                        </div>
                    </div>
                    <div className="lc-block small">
                        <div editable="rich">
                            <p>Story</p>
                            <p>Work with us</p>
                            <p>Blog</p>
                            <p>News</p>
                        </div>
                    </div>
                </Col>
                <Col lg={2} className="offset-lg-1">
                    <div className="lc-block mb-4">
                        <div editable="rich">
                            <h4>Downloads</h4>
                        </div>
                    </div>
                    <div className="lc-block small">
                        <div editable="rich">
                            <p>Vertex 1.2</p>
                            <p>Templates</p>
                            <p>Sounds</p>
                            <p>Gradients</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className="py-5">
            <Row>
                <Col sm={6} className="small">
                    <div className="lc-block">
                        <div editable="rich">
                            <p>Copyright © My Company 2020</p>
                        </div>
                    </div>
                </Col>
                <Col sm={6} className="text-end small">
                    <div className="lc-block">
                        <div editable="rich">
                            <p>
                                <a className="text-decoration-none mr-2" href="#">License Details</a> -
                                <a className="text-decoration-none ml-2" href="#">Terms &amp; Conditions</a>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default MyFooter;