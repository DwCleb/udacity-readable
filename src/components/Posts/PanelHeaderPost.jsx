import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap'
import FaEdit from 'react-icons/lib/fa/edit'
import FaClose from 'react-icons/lib/fa/close'
import {Link} from "react-router-dom";

const PanelHeaderPost = (post, editPost, deletePost) => {
  return (
      <div>
        <Link to={`/category/${post.category}/${post.id}`}>{post.title}</Link>
        <ButtonToolbar className="pull-right">
          <Button className="pull-right" bsSize="xsmall" bsStyle="danger" onClick={() => deletePost(post.id)}>
            <FaClose/>
          </Button>
          <Button className="pull-right" bsSize="xsmall" bsStyle="info" onClick={() => editPost(post)}>
            <FaEdit/>
          </Button>
        </ButtonToolbar>
        <br/>
      </div>
  )
}

export default PanelHeaderPost