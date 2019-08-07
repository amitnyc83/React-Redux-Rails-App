import React from 'react'

const Comments = props => (
  <ul>
  {
    props.comments.map((comment => <li key={comment.toString()}>{comment}</li>))
  }
  </ul>
);


export default Comments;
