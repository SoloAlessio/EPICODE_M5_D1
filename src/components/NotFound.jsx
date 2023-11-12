import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import { ThemeContext } from "../context/SearchContext";

export default function NotFound() {
  const theme = useContext(ThemeContext);
  return (
    <Container className="my-5 h-100">
      <Row>
        <Col
          xs={12}
          md={4}
          className="mx-auto"
          style={{ color: theme === "light" ? "#212529" : "#fff" }}
        >
          <h1 className="text-center mb-3">
            <Icons.Facebook />
          </h1>
          <h5 className="text-center">Ops, Qualcosa è andato storto...</h5>
        </Col>
      </Row>
    </Container>
  );
}
