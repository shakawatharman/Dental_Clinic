import React from "react";
import { Button, Form } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";


const Login = () => {

  const {user,googleSignIn} = useAuth();
  console.log(user)

  return (
    <div className="container border border-primary p-5 w-25">
        <h2 className="mb-5 text-primary text-center">Login</h2>

      <div className="text-center mb-3">
        <Button onClick={googleSignIn} variant="secondary" size="md">
                Login with Google
            </Button>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="text-center mt-3">
            <Button variant="primary" type="submit" size="lg">
                Login
            </Button>
        </div>
            <div className="mt-3 text-center"><a href="#">New user? Please Register</a></div>
    
    </div>
  );
};

export default Login;
