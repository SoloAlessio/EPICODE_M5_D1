import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import logo from "../logo.svg";
import * as Icons from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/SearchContext";

export default function MyNav({ searchQuery, setSearchQuery, setTheme }) {
  const theme = useContext(ThemeContext);
  return (
    <Navbar expand="lg" sticky="top" bg={theme} data-bs-theme={theme}>
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand>
            <img
              src={logo}
              width="56"
              height="56"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/">
              About
            </Link>
            <Link className="nav-link" to="/">
              Browse
            </Link>
          </Nav>
          <Form className="py-4 py-md-0">
            <Form.Control
              type="search"
              placeholder="Cerca un Libro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-pill"
              style={{ paddingLeft: "16px" }}
            />
          </Form>
        </Navbar.Collapse>
        <Button
          className="ms-3 rounded-circle d-flex align-items-center"
          style={{ aspectRatio: "1" }}
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? <Icons.MoonFill /> : <Icons.SunFill />}
        </Button>
      </Container>
    </Navbar>
  );
}
