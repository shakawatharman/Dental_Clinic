import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../resources/logo.png";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="container" id="header">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-dark fw-bold" href="#header">
                Home
              </Nav.Link>
              <Nav.Link className="text-dark fw-bold" href="#pricing">
                Pricing
              </Nav.Link>
              <Nav.Link className="text-dark fw-bold" href="#FAQ">
                FAQ
              </Nav.Link>
              <Nav.Link className="text-dark fw-bold" href="#services">
                Services
              </Nav.Link>
              {user?.email ? (
                <Button onClick={logOut} variant="light">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
