import { React } from 'react';
import SingleComment from './SingleComment'

const CommentList = ({List}) => {

    return(
        <SingleComment Comments={List}/>
    )
}

export default CommentList