import { React } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fantasy from "../Books/fantasy.json";
import history from "../Books/history.json";
import horror from "../Books/horror.json";
import romance from "../Books/romance.json";
import scifi from "../Books/scifi.json";
import CommentArea from "../components/CommentArea.jsx";

export default function BookDetails({ theme }) {
  const { id, genre } = useParams();

  const BooksByGenre = {
    fantasy,
    history,
    horror,
    romance,
    scifi,
  };

  return (
    <Container className="my-5">
      <Row className="g-4">
        <Col md={8}>
          {BooksByGenre[genre]
            .filter((b) => b.asin === id)
            .map((b) => (
              <Container fluid key={b.asin}>
                <Row className="g-4">
                  <Col md={4}>
                    <img
                      src={b.img}
                      alt={b.title}
                      className="img-fluid rounded shadow"
                    />
                  </Col>
                  <Col
                    md={8}
                    style={{ color: theme === "light" ? "#212529" : "#fff" }}
                  >
                    <h5>{b.title}</h5>
                    <hr />
                    <p>$ {b.price}</p>
                  </Col>
                </Row>
              </Container>
            ))}
        </Col>
        <Col md={4}>
          <CommentArea asin={id} />
        </Col>
      </Row>
    </Container>
  );
}
