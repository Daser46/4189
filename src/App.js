import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from './assets/logo.png';

const Login = () => {
  return (
    <Container fluid>
    <Row className='blue'>
      <Col fluid>
        <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto', margin: '2em' }} />
      </Col>
    </Row>
    <Row className='lightblue'>
      <Col fluid></Col>
    </Row>
    <Row className='blue footer'>
      <Col fluid style={{ textAlign: 'center', color: 'white', padding: '5px'}}>
        © Golden Pro, Inc. All rights reserved.
      </Col>
    </Row>
    <Container className='formWrapper'>
      <Form>
        <h2 className='title'>Login Here!</h2>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Form.Text id="passwordHelpBlock" muted>
          <div className="d-grid gap-2">
            <Button variant="link" type="submit" size="sm">
              Forgot Password?
            </Button>
          </div>    
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="remember me" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" className='button'>
            Login
          </Button>
        </div>
        <div className="d-grid gap-2">
          <Button variant="link" type="submit">
            Sign up Here
          </Button>
        </div>
        
      </Form> 
    </Container>

  </Container>
  );
}

export default Login;
