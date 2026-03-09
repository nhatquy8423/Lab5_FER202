import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">
        MOBI STORE
      </Navbar.Brand>{" "}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/product">
            Product
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/admin" className="text-light">
            Admin
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
