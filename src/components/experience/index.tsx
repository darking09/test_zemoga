import React from 'react'
import Card from 'react-bootstrap/Card'

function Experience(props : any) {
  return (
    <Card className={props.className}>
        <Card.Header as="h5">Name</Card.Header>
        <Card.Body>
            <Card.Title>My Work Experience</Card.Title>
            <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Experience