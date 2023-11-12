import { Button, Form, Row, Col, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Berear } from "../Berear";

const AddComment = ({ asin, setComments }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  });

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }));
  }, [asin]);

  const Submit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          headers: {
            Authorization: Berear,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(comment),
        }
      );
      if (response.ok) {
        toast.success("Recensione aggiunta con successo");
        getComments(asin);
        setComment({
          comment: "",
          rate: 1,
          elementId: asin,
        });
      } else {
        toast.error("Oops, qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
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
      setComments(comments);
    } else {
      console.log("error");
    }
  }

  return (
    <Form onSubmit={Submit}>
      <Form.Group>
        <Container fluid className="mb-3 px-0">
          <Row>
            <Col md={4} className="d-flex align-items-center mb-3 mb-md-0">
              <Icon.StarFill
                className="me-2"
                style={{ color: "#e37400", fontSize: "1rem" }}
              />
              <p className="mb-0 font-weight-bold">{comment.rate}</p>
            </Col>
            <Col md={8} className="d-flex align-items-center">
              <Form.Range
                id="Slider"
                max={5}
                value={comment.rate}
                onChange={(e) =>
                  setComment({
                    ...comment,
                    rate: e.target.value,
                  })
                }
              />
            </Col>
          </Row>
        </Container>
        <Form.Control
          type="text"
          placeholder="Inserisci il tuo commento"
          value={comment.comment}
          onChange={(e) =>
            setComment({
              ...comment,
              comment: e.target.value,
            })
          }
          className="mb-3"
        />
        <Button type="submit" variant="primary" className="w-100">
          Invia
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AddComment;
