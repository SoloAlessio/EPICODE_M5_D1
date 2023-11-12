import { Form, Row, Col, Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { Berear } from "../Berear";
import { useParams } from "react-router-dom";

const SingleComment = ({ Comments, setComments }) => {
  const { asin } = useParams();
  const handleDelete = async (id) => {
    if (!window.confirm("Sei sicuro?")) {
      return;
    }

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          headers: {
            Authorization: Berear,
            "Content-Type": "application/json",
          },
          method: "DELETE",
        }
      );
      if (response.ok) {
        toast.success("Recensione eliminata con successo");
        getComments(asin);
      } else {
        toast.error(`Oops, qualcosa è andato storto... ${response.statusText}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function getComments(id) {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/books/${id}/comments/`,
      {
        headers: {
          Authorization: Berear,
        },
      }
    );
    if (response.ok) {
      let comments = await response.json();
      console.log(comments);
      setComments(comments);
    } else {
      console.log("error");
    }
  }

  const CardTitleWithStars = ({ rate, author }) => {
    const starIcons = [];

    for (let i = 0; i < rate; i++) {
      starIcons.push(
        <Icon.StarFill
          key={i}
          className="me-2 fs-6"
          style={{ color: "#e37400" }}
        />
      );
    }

    return (
      <div className="mb-2">
        <p className="mb-2" style={{ fontSize: ".85rem" }}>
          {author}
        </p>
        <div>{starIcons}</div>
      </div>
    );
  };

  return (
    <Form.Group className="mb-0">
      {Comments.map((review) => (
        <Row key={review._id}>
          <Col xs={9}>
            <Card.Title className="fs-8">
              <CardTitleWithStars rate={review.rate} author={review.author} />
              <p className="fw-normal fs-7">{review.comment}</p>
            </Card.Title>
          </Col>
          <Col xs={3}>
            <Button
              variant="outline-danger w-100"
              onClick={() => handleDelete(review._id)}
            >
              <Icon.TrashFill style={{ fontSize: "14px" }} />
            </Button>
          </Col>
        </Row>
      ))}
    </Form.Group>
  );
};

export default SingleComment;
