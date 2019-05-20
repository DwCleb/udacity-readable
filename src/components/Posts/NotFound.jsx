import React, { Component } from 'react'

import { Image, Col, Grid, Row } from 'react-bootstrap'

import image from '../../assets/404.jpeg'

class NotFound extends Component {

  render() {
   return (
      <div>
        <Grid>
          <Row>
            <Col md={12} xs={10}>
             <Image src={image} responsive/>
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }
}

export default NotFound