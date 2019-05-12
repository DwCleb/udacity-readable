import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap'
import FaEdit from 'react-icons/lib/fa/edit'
import FaClose from 'react-icons/lib/fa/close'

const CommentHeaderPost = (comment, editComment, deleteComment) => {
  return (
      <div>
        {comment.author}
        <ButtonToolbar className="pull-right">
          <Button className="pull-right" bsSize="xsmall" bsStyle="danger" onClick={() => deleteComment(comment)}>
            <FaClose />
          </Button>
          <Button className="pull-right" bsSize="xsmall" bsStyle="info" onClick={() => editComment(comment)}>
            <FaEdit />
          </Button>
        </ButtonToolbar>
        <br/>
      </div>
  )
}

export default CommentHeaderPost