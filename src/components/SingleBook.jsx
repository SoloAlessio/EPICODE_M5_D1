import { useState } from "react";
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useContext } from 'react';
import context from "../context/SearchContext";

const SingleBook = ({ book }) => {
    const [selected, setSelected] = useState(false)
    const theme = useContext(context)

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
        <Card className="border-0 h-100" style={{backgroundColor: theme === "light" ? '#fff' : '#121212'}}>
            <Card
                onClick={handleCardClick}
                style={{ border: selected ? '2px solid #bb212450' : theme === 'light' ? '2px solid #f6f6f7' : '2px solid #252525' }}
                bg={theme}
                className="p-3"
                id="Book"
            >
                <Card.Img
                    src={book.img}
                    style={{ height: "70%", objectFit: "cover", borderRadius: "8px" }}
                    className="shadow"
                />
                <Card.Body className="px-0 d-flex flex-column justify-content-between">
                    <Card.Title
                        className="TextCut"
                        style={{ color: theme === 'light' ? '#252525' : '#fff', fontSize: "1rem" }}
                    >
                        {book.title}
                    </Card.Title>
                    <Card.Text style={{color: theme === 'light' ? '#252525' : '#fff'}}>
                        $ {book.price}
                    </Card.Text>
                </Card.Body>
            </Card>
            {selected && <CommentArea asin={book.asin} />}
        </Card>
    )
}

export default SingleBook