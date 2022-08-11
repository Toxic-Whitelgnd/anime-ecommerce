import React from 'react'

// NavBar components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  return (
   <div>
   <Navbar collapseOnSelect className="h-20" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#collections">Collections</Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tshirt
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shoes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Collections
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">AboutUs</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                MSOB
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  )
}
