import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import { ThemeContext } from "../context/SearchContext";

export default function NotFound() {
  const theme = useContext(ThemeContext);
  return (
    <Container className="my-5 py-3 h-100">
      <Row>
        <Col
          xs={12}
          md={4}
          className="mx-auto"
          style={{ color: theme === "light" ? "#212529" : "#fff" }}
        >
          <h1 className="text-center mb-3">
            <Icons.Heartbreak />
          </h1>
          <h3 className="text-center">Error 404</h3>
          <h5
            className="text-center fw-light text-danger"
            style={{ opacity: "0.75" }}
          >
            Ops, Qualcosa è andato storto...
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
