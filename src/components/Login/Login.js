import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link,useHistory,useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Image from "../../resources/illustration.jpg";



const Login = () => {
  

  const history = useHistory();
  const location = useLocation();
  const {  googleSignIn } = useAuth();
  const redirect_url = location.state?.from || '/home';

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result =>{
      history.push(redirect_url)
    })
   
  }
 

  return (
    <div className="container p-5">
      <div className="row justify-content-center">

      <div className="col-md-6">
        <img src={Image} alt="" />
      </div>

        <div className="col-md-6 col-sm-12 shadow p-3">
          <h2 className="mb-5 text-primary text-center">Login</h2>
          <div className="text-center mb-3">
            <Button onClick={handleGoogleSignIn} variant="secondary" size="md">
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
          <div className="mt-3 text-center">
            <Link to="/register">New User? Please Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
