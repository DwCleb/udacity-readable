import React from 'react';
import { Button, ButtonToolbar, Col } from 'react-bootstrap'
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down'

const ButtonVote = (props) => {
  const { id, onClick } = props
  return (
    <div>
      <Col md={12}>
        <ButtonToolbar className="pull-right">
          <Button bsSize="small" bsStyle="success" onClick={() => onClick(id, "upVote")}>
            <FaThumbsOUp />
          </Button>
          <Button bsSize="small" bsStyle="danger" onClick={() => onClick(id, "downVote")}>
            <FaThumbsODown />
          </Button>
        </ButtonToolbar>
      </Col>
    </div >
  )
}

export default ButtonVote
