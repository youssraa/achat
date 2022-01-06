import React from 'react'
import {Navbar , Container,Nav , NavDropdown } from 'react-bootstrap'
export default function Navebar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Suivi d'achat</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     

    </Nav>
    <Nav>
      <NavDropdown title="Pramétre" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Paramétre compte</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Notification</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Deconnexion</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
