import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import ProfileImg from '../profileImg';

function Tweets(props : any) {
  return (
    <ListGroup.Item>
        <Row>
            <Col md={4} lg={3}>
                <ProfileImg
                    classNameFigure='m-0 align-middle'
                    classNameImg='m-0 border align-middle'
                    img={props.image}
                    width={50}
                    height={70}
                />
            </Col>
            <Col md={8} lg={9}>
                <Card 
                className="mb-2">
                    <Card.Body>
                        <Card.Subtitle>{props.name}</Card.Subtitle>
                        <Card.Text>
                            {props.content}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </ListGroup.Item>
  )
}

export default Tweets