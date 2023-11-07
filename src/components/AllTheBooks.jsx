import { Col, Row } from "react-bootstrap";
import fantasy from '../Books/scifi.json'
import SingleBook from "./SingleBook";
import ThemeContext from '../context/SearchContext.jsx';
import CommentArea from '../components/CommentArea.jsx';
import { useState } from "react";

const MyFunction = ({ searchQuery, theme }) => {

    const [selected, setSelected] = useState('')

    return (
        <ThemeContext.Provider value={theme}>
            <h1 style={{color: theme === 'light' ? '#212529' : '#fff'}}>Books</h1>
            <Row>
                <Col md={6}>
                    <Row className="g-4 mb-5 mt-3">
                        {fantasy
                            .filter((b) => b.title.toLowerCase()
                            .includes(searchQuery))
                            .map((books) => (
                                <Col
                                    xs={12}
                                    lg={6}
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
                <Col md={6}>
                    <CommentArea asin={selected}/>
                </Col>

            </Row>
        </ThemeContext.Provider>
    )
}

export default MyFunction