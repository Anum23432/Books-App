import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import {useHistory} from "react-router-dom";


function Login() {

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
      }
    
      const onChangePassword = (event) => {
        setPassword(event.target.value);
      }

    const handleClick = () => {
        console.log(email, password);
        if (email === "" || password === "") {
          alert('please enter valid email and password')
         }
        else {
           window.localStorage.setItem(email,password);
           history.push('/BookList')
        }
    }
  
    return (
        <>
          <Container style={{width:'40rem',backgroundColor:'rgb(30, 109, 65)', marginTop:'30px'}}>
    
          <Card style={{backgroundColor:'lightcyan'}}>
          <Card.Body>

            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name = "email" type="email" placeholder="Enter email" onChange={onChangeEmail}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name = "password"type="password" placeholder="Password" onChange={onChangePassword}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Logged In" />
            </Form.Group>
            <Button variant="success" type="submit" onClick={handleClick}>Submit</Button>
            </Form>
            </Card.Body>
            </Card>

            </Container>
            
            
        </>
);
}

export default Login;