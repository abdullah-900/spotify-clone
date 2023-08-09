import './App.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SideBar from './SideBar';
import Main from './Main';
import Player from './Player';
function App() {
  return (
    <Container className='app' fluid >
      <Row style={{ height: '80vh' }}>
        <Col className='left' xs={3} sm={1} md={1} lg={1} xl={1} xxl={1}>
          <SideBar/>
        </Col>
        <Col className='right' xs={9} sm={11} md={11} lg={11} xl={11} xxl={11}>
          <Row>
            <Main/>
          </Row>
        </Col>
      </Row>
          <Player/>
    </Container>
  );
}

export default App;


