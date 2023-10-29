import { useState } from "react";
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

const SingleBook = ({ book }) => {
    const [selected, setSelected] = useState(false)

    const handleCardClick = (e) => {
        if (selected) {
            if (!e.target.closest('.Reviews')) {
                setSelected(!selected);
            }
        } else {
            setSelected(!selected)
        }
    };

    return (
        <Card className="border-0" style={{height: "100%"}}>
            <Card
                onClick={handleCardClick}
                style={{ border: selected ? '2px solid #bb212450' : '2px solid #f6f6f7' }}
                bg="light"
                className="p-3"
                id="Book"
            >
                <Card.Img
                    src={book.img}
                    style={{ height: "70%", objectFit: "fill", borderRadius: "8px" }}
                    className="shadow"
                />
                <Card.Body className="px-0 d-flex flex-column justify-content-between">
                    <Card.Title
                        className=""
                        style={{ color: "#252525", fontSize: "1rem" }}
                    >
                        {book.title}
                    </Card.Title>
                    <Card.Text>
                        $ {book.price}
                    </Card.Text>
                </Card.Body>
            </Card>
            {selected && <CommentArea asin={book.asin} />}
        </Card>
    )
}

export default SingleBook