import React from 'react'
import Card from 'react-bootstrap/Card'

function Experience(props : any) {
  return (
    <Card className={props.className}>
        <Card.Header as="h5">{props.name}</Card.Header>
        <Card.Body>
            <Card.Title>My Work Experience</Card.Title>
            <Card.Text>
                {props.experience}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Experience