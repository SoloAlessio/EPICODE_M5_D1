import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap'
import logo from '../logo.svg'
import * as Icons from 'react-bootstrap-icons'

const MyNav = ({ searchQuery, setSearchQuery, theme, setTheme }) => (
    <Navbar
        expand="lg"
        variant={theme}
        sticky='top'
        bg={theme}
    >
        <Container>
            <Navbar.Brand href="#home">
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
                <Nav className="me-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Browse">Browse</Nav.Link>
                </Nav>
                <Form className='py-4 py-md-0'>
                    <Form.Control
                        type="search"
                        placeholder="Cerca un Libro..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='rounded-pill'
                        style={{ paddingLeft: "16px" }}
                    />
                </Form>
            </Navbar.Collapse>
            <Button
                className='ms-3 rounded-circle d-flex align-items-center'
                style={{aspectRatio: '1'}}
                onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light') }}
            >
                {theme === 'light' ? (
                    <Icons.MoonFill />
                ) : (
                    <Icons.SunFill />
                )}
            </Button>
        </Container>
    </Navbar>

)

export default MyNav