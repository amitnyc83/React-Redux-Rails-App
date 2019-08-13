import React from 'react'
import { List} from 'semantic-ui-react'

const Comments = props => (
  <List as='ol'>
  {
    props.comments.map((comment => <li>{comment}</li>))
  }
  </List>
);


export default Comments;
