import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Header title={'asd'} />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Sidebar />
          </Col>
          <Col xs={8}>
            <Content />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>

      </Container>
    );
  }
}

export default App;
