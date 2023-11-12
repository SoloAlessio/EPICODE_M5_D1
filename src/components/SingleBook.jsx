import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/SearchContext";
import * as Icon from "react-bootstrap-icons";

const SingleBook = ({ book, selected, setSelected }) => {
  const theme = useContext(ThemeContext);

  return (
    <Card
      onClick={() => setSelected(book.asin)}
      style={{
        backgroundColor: theme === "light" ? "#FBFCFE" : "#121212",
        border:
          selected === book.asin
            ? "1px solid #22bb33"
            : theme === "light"
            ? "1px solid #fff"
            : "1px solid #212529",
      }}
      bg={theme}
      className="p-3 Book"
      data-testid="Card"
    >
      <Card.Img
        src={book.img}
        style={{ height: "60%", objectFit: "cover" }}
        variant="top"
      />

      <Card.Body className="px-0 py-2 d-flex">
        <Container fluid className="align-self-end">
          <Row>
            <Col md={12} className="px-0">
              <Card.Title
                className="TextCut mb-4 fs-7"
                style={{
                  color: theme === "light" ? "#252525" : "#fff",
                }}
              >
                {book.title}
              </Card.Title>
            </Col>
            <Col xs={8} className="px-0">
              <div style={{ color: theme === "light" ? "#252525" : "#fff" }}>
                <p className="fs-8 mb-0">Total Price: </p>
                <p className="mb-0 fw-semibold">$ {book.price}</p>
              </div>
            </Col>
            <Col xs={4} className="px-0">
              <Link
                to={`bookDetail/${book.category}/${book.asin}`}
                className="text-decoration-none"
              >
                <Button
                  variant={theme === "light" ? "outline-dark" : "outline-light"}
                  className="w-100 h-100 px-0"
                >
                  <Icon.JustifyRight />
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
