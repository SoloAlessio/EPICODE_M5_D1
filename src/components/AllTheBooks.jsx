import { Container, Col, Row, Tabs, Tab } from "react-bootstrap";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/SearchContext.jsx";
import SingleBook from "./SingleBook";
import Welcome from "./Welcome.jsx";
import fantasy from "../Books/fantasy.json";
import scifi from "../Books/scifi.json";
import history from "../Books/history.json";
import horror from "../Books/horror.json";
import romance from "../Books/romance.json";

const AllTheBooks = ({ searchQuery, selected, setSelected }) => {
  const [selectedGenre, setSelectedGenre] = useState("fantasy");
  const theme = useContext(ThemeContext);

  const BooksByGenre = {
    fantasy,
    history,
    horror,
    romance,
    scifi,
  };

  const books = BooksByGenre[selectedGenre];

  return (
    <Container>
      <Welcome />
      <h1 style={{ color: theme === "light" ? "#212529" : "#fff" }}>Books</h1>
      <Tabs
        defaultActiveKey="fantasy"
        id="justify-tab-example"
        className="my-3"
        fill
        onSelect={(genre) => setSelectedGenre(genre)}
        data-bs-theme={theme}
      >
        {Object.keys(BooksByGenre).map((genre) => (
          <Tab eventKey={genre} title={genre} key={genre} />
        ))}
      </Tabs>
      <Row className="g-4 mb-5 mt-3">
        {books
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((books) => (
            <Col
              xs={6}
              sm={4}
              md={3}
              xl={2}
              key={books.asin}
              className="mt-0 mb-4"
            >
              <SingleBook
                book={books}
                selected={selected}
                setSelected={setSelected}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
