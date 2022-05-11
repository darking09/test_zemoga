import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProfileImg from '../../components/profileImg';
import Timeline from '../../components/timeline';
import Experience from '../../components/experience';
import LinkProfile from '../../components/linkProfile';

import userHook from '../../hooks/userHook';

const Home: NextPage = (props: any) => {
  const router = useRouter()
  const { id_user } = router.query;
  const {loadUser, user} = userHook();

  useEffect(() => {
    loadUser(props.urlBase, id_user as string);
  }, [])
  

  return (
    <Container className="p-5">
        <Container fluid className="p-3 shadow-sm mb-3 bg-body rounded-3">
          <Row>
            <Col md={12} lg={4}>
              <Row>
                <ProfileImg 
                  img={user.picture}
                  width={60}
                  height={70}
                />
                <Timeline 
                  tweets={user.tweets}
                />
              </Row>
              <Row>
                <LinkProfile
                  handle={user.twitterHandle}
                />
              </Row>
            </Col>
            <Col md={12} lg={8}>
              <Experience
                name={user.name}
                experience={user.experience}
                className='full-height'
              />
            </Col>
          </Row>
        </Container>
    </Container>
  )
}
export async function getStaticPaths() {
  return {
    paths: [
      { 
        params: { 
          id_user: 'darkingsoft'
        } 
      }
    ],
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps() {
  return { 
    props: {
      urlBase : process.env.URL_BASE
    } 
  }
}

export default Home;