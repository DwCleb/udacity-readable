import React from 'react';
import { Col, Panel, Row } from 'react-bootstrap'
import ButtonVote from '../Buttons/Vote'
import CommentHeaderPost from './CommentHeaderPost'

const CommentListConst = (props) => (
  <div>
    {props.comments && props.comments.map((comment, index) => {
      return (<Row key={index}>
        <Panel
          bsStyle="warning"
          header={CommentHeaderPost(comment, props.editComment, props.deleteComment)}
          key={index}>
          <Row>
            <Col md={10}>
              {comment.body}
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={4}>
              <div>
                <strong>Timestamp: </strong>{new Date(comment.timestamp).toLocaleString()}
              </div>
            </Col>
            <Col md={2}>
              <strong>Score: </strong>{comment.voteScore}
            </Col>
          </Row>
          <Row>
            <ButtonVote id={comment.id} onClick={props.vote} />
          </Row>
        </Panel>
      </Row>
      )
    }
    )}
  </div>
);

export default CommentListConst;
