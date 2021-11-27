import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="container-fluid" id="header">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Nav.Link as={Link} to="/home">
            <img
              src="https://i.ibb.co/XkDDwmp/cover.png"
              width="250"
              height="70"
              className="d-inline-block align-top"
              alt=""
            />
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="text-dark fw-bold" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="text-dark fw-bold" to="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link as={Link} className="text-dark fw-bold" to="/consultation">
                Consultation
              </Nav.Link>
              <Nav.Link as={Link} className="text-dark fw-bold" to="/FAQ">
                FAQ
              </Nav.Link>
              <Nav.Link as={Link} className="text-dark fw-bold" to="/about">
                About us
              </Nav.Link>
              {user?.email ? (
               <>
                <Button  className="text-danger fw-bold" onClick={logOut} variant="light">
                  Logout
                </Button>
               <button className="bg-primary p-1 text-white fw-bold">
               User: {user?.displayName}
           </button>
               </>

              ) : (
                <Nav.Link className="text-dark fw-bold" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
             


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
