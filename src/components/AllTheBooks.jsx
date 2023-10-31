import { Col, Row } from "react-bootstrap";
import fantasy from '../Books/scifi.json'
import SingleBook from "./SingleBook";

const MyFunction = ({searchQuery}) => {

    return (
        <>
            <h1>Books</h1>
            <Row className="g-4 my-5">
                {fantasy
                    .slice(0,12)
                    .filter((b) => b.title.toLowerCase()
                    .includes(searchQuery))
                    .map((books) => (
                        <Col
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={books.asin}
                        >
                            <SingleBook book={books} />
                        </Col>
                    ))}
            </Row>
        </>
    )
}

export default MyFunction