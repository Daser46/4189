import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Register() {
  return (
    <Container fluid>
    <Row className='blue'>
      <Col fluid></Col>
    </Row>
    <Row className='lightblue'>
      <Col fluid></Col>
    </Row>
    <Container className='formWrapper'>
      <Form>
        <h2>Login Here</h2>
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
              Privacy and Policies
            </Button>
          </div>    
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="remember me" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Register
          </Button>
        </div>
        <div className="d-grid gap-2">
          <Button variant="link" type="submit">
            Sign In Here
          </Button>
        </div>
        
      </Form> 
    </Container>

  </Container>
  );
}

export default Register;
