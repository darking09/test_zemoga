import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Tweets from './tweets';

function Timeline(props : any) {
  return (
    <ListGroup>
        {
          props.tweets.map((t:any) => <Tweets
            key={t._id}
            image={t.picture}
            name={t.name}
            content={t.content}
          />)
        }
    </ListGroup>
  )
}

export default Timeline