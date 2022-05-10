import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Tweets from './tweets';

function Timeline() {
  return (
    <ListGroup>
        <Tweets>Cras justo odio</Tweets>
        <Tweets>Dapibus ac facilisis in</Tweets>
        <Tweets>Morbi leo risus</Tweets>
        <Tweets>Porta ac consectetur ac</Tweets>
        <Tweets>Vestibulum at eros</Tweets>
    </ListGroup>
  )
}

export default Timeline