import { useState } from "react";
import { Card } from 'react-bootstrap'

const SingleBook = ({book}) => {
    const [selected, setSelected] = useState(false)

    return (
        <Card
            onClick={() => setSelected(!selected)}
            style={{border: selected ? '2px solid #bb212450' : '2px solid #f6f6f7', height: "100%", borderRadius: "24px"}}
            bg="light"
            className="p-3"
            id="Book"
        >
            <Card.Img 
                src={book.img}
                style={{height: "70%", objectFit: "cover", borderRadius: "8px"}}
                className="shadow"
            />
            <Card.Body className="px-0 h-100 d-flex flex-column justify-content-between">
                <Card.Title 
                    className="TextCut"
                    style={{color: "#252525", fontSize: "1rem"}}
                >
                    {book.title}
                </Card.Title>
                <Card.Text>
                    $ {book.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SingleBook