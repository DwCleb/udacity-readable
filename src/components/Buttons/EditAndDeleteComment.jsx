import React from 'react';
import { Button, ButtonToolbar, Col } from 'react-bootstrap'
import FaEdit from 'react-icons/lib/fa/edit'
import FaClose from 'react-icons/lib/fa/close'

const ButtonVote = (props) => {
  const { comment, deleteComment, editComment } = props
  return (
    <div>
      <Col md={12}>
        <ButtonToolbar className="pull-right">
          <Button className="pull-right" bsSize="xsmall" bsStyle="danger" onClick={() => deleteComment(comment)}>
            <FaClose />
          </Button>
          <Button className="pull-right" bsSize="xsmall" bsStyle="info" onClick={() => editComment(comment)}>
            <FaEdit />
          </Button>
        </ButtonToolbar>
      </Col>
    </div >
  )
}

export default ButtonVote
