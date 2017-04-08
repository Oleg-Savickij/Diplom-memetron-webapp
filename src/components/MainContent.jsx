import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default function (props) {
  const mainContentStyle = {
    position: 'relative',
  };

  return (
    <Grid fluid={true} style={mainContentStyle}>
      <Row className='show-grid'>
        <Col xs={12}>
          {props.children}
        </Col>
      </Row>
    </Grid>
  );
}
