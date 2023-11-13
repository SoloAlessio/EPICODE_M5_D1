import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Card, Container } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../context/SearchContext";
import { Berear } from "../Berear";

const CommentArea = ({ asin }) => {
  const theme = useContext(ThemeContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
          {
            headers: {
              Authorization: Berear,
            },
          }
        );

        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (asin) {
      getComments();
    }
  }, [asin]);

  return (
    <Container fluid>
      <Card
        className="p-4 border-0"
        data-bs-theme={theme}
        data-testid="commentArea"
        style={{
          background: theme === "light" ? "#f8f9fa" : "#212529",
        }}
      >
        <h5 className="mb-0">Recensioni: {comments.length}</h5>
        <hr />
        {comments.length <= 0 ? (
          "Nessuna Recensione"
        ) : (
          <CommentList List={comments} setComments={setComments} />
        )}
        <hr />
        <AddComment asin={asin} setComments={setComments} />
      </Card>
    </Container>
  );
};

export default CommentArea;
