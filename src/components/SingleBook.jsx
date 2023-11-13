import { Card, Row, Col, Container } from "react-bootstrap";
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
          theme === "light"
            ? selected === book.asin
              ? "1px solid #00000050"
              : "1px solid #f3f4fa50"
            : selected === book.asin
            ? "1px solid #f3f4fa50"
            : "1px solid #00000050",
      }}
      bg={theme}
      className="p-3 Book"
      data-testid="Card"
    >
      <div className="position-relative" style={{ height: "60%" }}>
        <Card.Img
          src={book.img}
          style={{ objectFit: "cover" }}
          className="rounded shadow h-100"
        />
        <span className={`details shadow bg-${theme}`}>
          <Link
            to={`bookDetail/${book.category}/${book.asin}`}
            className="text-decoration-none"
          >
            <Icon.JustifyRight
              style={{ color: theme === "light" ? "#212529" : "#fff" }}
            />
          </Link>
        </span>
      </div>
      <Card.Body className="px-0 pb-2 pt-4 d-flex">
        <Container fluid className="align-self-end">
          <Row>
            <Col md={12} className="px-0">
              <Card.Title
                className="TextCut mb-3 fs-7"
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
            <Col xs={4} className="px-0 mx-0"></Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
