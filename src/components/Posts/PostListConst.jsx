import React from 'react';
import { Button, Col, Panel, Row } from 'react-bootstrap'
import PanelHeaderPost from "./PanelHeaderPost";
import ButtonVote from "../Buttons/Vote";

const PostListConst = (props) => (
  <div>
    {props.posts.length > 0
      ? props.posts.map((post, index) => {
        return (<Row key={index}>
          <Panel bsStyle="info" header={PanelHeaderPost(post, props.editPost, props.deletePost)} key={index}>
          <Row>
            <Col md={10}>
              <Col md={4}>
                <div>
                  <strong>Author: </strong>{post.author}
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <strong>Nº comments: </strong>{post.commentCount}
                </div>
              </Col>
              <Col md={2}>
                <strong>Score: </strong>{post.voteScore}
              </Col>
            </Col>
          </Row>
          <Row>
            <ButtonVote id={post.id} onClick={props.votePost} />
          </Row>
          </Panel>
        </Row>
        )
      }
      )
      : <h2> No have posts yet</h2>
    }
  </div>
);

export default PostListConst;
