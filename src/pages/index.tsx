import type { NextPage } from 'next'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProfileImg from '../components/profileImg';
import Timeline from '../components/timeline';
import Experience from '../components/experience';
import LinkProfile from '../components/linkProfile';


const Home: NextPage = () => {
  return (
    <Container className="p-5">
        <Container fluid className="p-3 shadow-sm mb-3 bg-body rounded-3">
          <Row>
            <Col md={12} lg={4}>
              <Row>
                <ProfileImg 
                  img="./istockphoto-517998264-612x612.jpeg"
                  width={120}
                  height={140}
                />
                <Timeline />
              </Row>
              <Row>
                <LinkProfile/>
              </Row>
            </Col>
            <Col md={12} lg={8}>
              <Experience className='full-height'/>
            </Col>
          </Row>
        </Container>
    </Container>
  )
}

export default Home