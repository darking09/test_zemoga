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
                    img="./istockphoto-517998264-612x612.jpeg"
                    width={100}
                    height={120}
                />
            </Col>
            <Col md={8} lg={9}>
                <Card 
                className="mb-2">
                    <Card.Body>
                        <Card.Subtitle>Card Title </Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </ListGroup.Item>
  )
}

export default Tweets