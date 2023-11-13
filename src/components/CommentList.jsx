import { React } from "react";
import SingleComment from "./SingleComment";
import { Form } from "react-bootstrap";

const CommentList = ({ List, setComments }) => {
  return (
    <Form.Group className="mb-0">
      {List.map((comments) => (
        <SingleComment
          Comment={comments}
          setComments={setComments}
          key={comments._id}
        />
      ))}
    </Form.Group>
  );
};

export default CommentList;
