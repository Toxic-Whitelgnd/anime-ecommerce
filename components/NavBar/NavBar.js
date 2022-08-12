import React from 'react'
import {useRouter} from "next/router"

// NavBar components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Link from 'react-scroll'

export default function NavBar() {

  const router = useRouter();

  return (
   <div>
   <Navbar collapseOnSelect className="h-20" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/collections">Collections</Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/jackets">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="/Tshirts">
                Tshirt
              </NavDropdown.Item>
              <NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Comming soon.
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


// <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>