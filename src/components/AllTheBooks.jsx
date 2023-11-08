import { Container, Col, Row, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import SingleBook from "./SingleBook";
import Welcome from './Welcome.jsx'
import fantasy from '../Books/fantasy.json'
import scifi from '../Books/scifi.json'
import history from '../Books/history.json'
import horror from '../Books/horror.json'
import romance from '../Books/romance.json'

const MyFunction = ({ searchQuery, theme, selected, setSelected }) => {

    const [selectedGenre, setSelectedGenre] = useState("fantasy");

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
            <Welcome theme={theme} />
            <h1 style={{ color: theme === 'light' ? '#212529' : '#fff' }}>Books</h1>
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="my-3"
                justify
                onSelect={(genre) => setSelectedGenre(genre)}
                style={{ color: theme === 'light' ? '#212529' : '#fff' }}
            >
                {Object.keys(BooksByGenre).map((genre) => (
                    <Tab eventKey={genre} title={genre}/>
                ))}
            </Tabs>
            <Row>
                <Col>
                    <Row className="g-4 mb-5 mt-3">
                        {books
                            .filter((b) => b.title.toLowerCase()
                                .includes(searchQuery))
                            .map((books) => (
                                <Col
                                    xs={12}
                                    md={4}
                                    lg={3}
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
                </Col>
            </Row>
        </Container>
    )
}

export default MyFunction