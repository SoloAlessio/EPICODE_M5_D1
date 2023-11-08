import { React } from 'react';
import SingleComment from './SingleComment'

const CommentList = ({List, setComments}) => {

    return(
        <SingleComment Comments={List} setComments={setComments}/>
    )
}

export default CommentList