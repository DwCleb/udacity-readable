import React from 'react';
import { Col, Panel, Row } from 'react-bootstrap'
import PanelHeaderPost from "./PanelHeaderPost";
import ButtonVote from '../Buttons/Vote'

const postDetailConst = (props) => {
  const {
    post,
    editPost,
    deletePost,
    votePost,
  } = props
  return (
    <div>
      <Panel
        header={PanelHeaderPost(post, editPost, deletePost)}
        bsStyle="info"
        key={0}
      >
        <Row>
          <Col md={12}>
            {post.body}
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={2}>
            <div>
              <strong>Author: </strong>{post.author}
            </div>
          </Col>
          <Col md={4}>
            <div>
              <strong>Date: </strong>{new Date(post.timestamp).toLocaleString()}
            </div>
          </Col>
          <Col md={2}>
            <div>
              <strong>Comments: </strong>{post.commentCount}
            </div>
          </Col>
          <Col md={2}>
            <strong>Score: </strong>{post.voteScore}
          </Col>
        </Row>
        <Row>
          <ButtonVote id={post.id} onClick={votePost} />
        </Row>
      </Panel>
    </div>
  )
}

export default postDetailConst
