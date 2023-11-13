import { Row, Col, Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { Berear } from "../Berear";
import { useParams } from "react-router-dom";

const SingleComment = ({ Comment, setComments }) => {
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

  return (
    <Row data-testid="single-comment">
      <Col xs={9}>
        <Card.Title className="fs-8">
          <CardTitleWithStars rate={Comment.rate} author={Comment.author} />
          <p className="fw-normal fs-7">{Comment.comment}</p>
        </Card.Title>
      </Col>
      <Col xs={3} className="text-end">
        <Button
          variant="outline-danger"
          onClick={() => handleDelete(Comment._id)}
        >
          <Icon.TrashFill className="fs-8" />
        </Button>
      </Col>
    </Row>
  );
};

export default SingleComment;

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
