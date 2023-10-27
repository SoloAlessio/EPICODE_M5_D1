import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../logo.svg'

const MyNav = () => (
    <Navbar 
        expand="lg" 
        bg="light"
    >
        <Container fluid>
            <Navbar.Brand href="#">
                <img
                    src={logo}
                    width="56"
                    height="56"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Browse</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default MyNav