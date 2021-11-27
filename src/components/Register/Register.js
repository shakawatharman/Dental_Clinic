import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { googleSignIn, registerWithEmail } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    registerWithEmail(email, password)
      .then((userData) => {
        const user = userData.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  console.log(email);

  return (
    <div className="container p-5">
      <div className="row  justify-content-center">
        <div className="col-md-6">
          <img src="https://i.ibb.co/wY82WjW/illustration.jpg" alt="" />
        </div>
        <div className="col-md-6 col-sm-12 shadow p-3 text-center">
          <Form onSubmit={handleRegister} className="my-5">
            <h2 className="mb-5 text-primary"> Please Register</h2>
            <div className="mb-3">
              <Button onClick={googleSignIn} variant="secondary" size="md">
                Register with Google
              </Button>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmail}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePassword}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <p className="text-danger">{error}</p>
            <Button variant="primary" type="submit">
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
