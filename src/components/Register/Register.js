import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Image from "../../resources/illustration.jpg";

const Register = () => {
 


  const {googleSignIn, handleEmail, handlePassword,handleRegisterClick} = useAuth();
  return (
    <div className="container p-5">
      <div className="row  justify-content-center">
        <div className="col-md-6">
          <img src={Image} alt="" />
        </div>
        <div className="col-md-6 col-sm-12 shadow p-3 text-center">
          <Form className="my-5">
            <h2 className="mb-5 text-primary"> Please Register</h2>
            <div className="mb-3">
            <Button onClick={googleSignIn} variant="secondary" size="md">
              Register with Google
            </Button>
          </div>
        
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
            </Form.Group>
            

            <Button onClick={handleRegisterClick} variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <div className="my-3 text-center">
            <Link to="/login">Already Register? Please Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
