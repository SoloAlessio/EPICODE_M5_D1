import { useEffect, useState } from "react";
import CommentList from './CommentList'
import AddComment from './AddComment'
import { Card } from "react-bootstrap";

const Fetch = ({ asin }) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        const getComments = async () => {
            try {
                let response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkMjAyOTYzZjE1ODAwMTQxMTg0NzUiLCJpYXQiOjE2OTg1MDQ3NDUsImV4cCI6MTY5OTcxNDM0NX0.RP0iwx7dtrOLNI8LQJ6uqC0M0UKPr_063xel1qtoaIg"
                    }
                })

                if (response.ok) {
                    let comments = await response.json()
                    setComments(comments)
                } else {
                    console.log("error");
                }

            } catch (error) {
                console.log(error);
            }
        }

        if(asin){
            getComments()
        }

    }, [asin])

    return (
        <Card className="Reviews p-3 mt-3" bg="light">
            <h5 className="mb-0">Recensioni</h5>
            <hr />
            <CommentList List={comments} />
            <hr />
            <AddComment asin={asin} />
        </Card>
    )
}

export default Fetch