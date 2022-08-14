import React from 'react'
import {useRouter} from "next/router"

// NavBar components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdFavorite, MdShoppingCart } from "react-icons/md";
// import Link from 'react-scroll'

// importing functionalities
import { useStateContext } from '../../context/StateConTexT';

export default function NavBar() {

  const router = useRouter();
  const {favqty, setShowcart , totalQty} = useStateContext();

  return (
   <div>
   <Navbar collapseOnSelect className="h-20 bg-[#212529]" expand="lg" bg="dark" variant="dark"  fixed="top" >
      <Container >
        <Navbar.Brand  href="/">AkaStores</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="bg-[#212529] p-2">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/collections">Collections</Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown" className="bg-[#212529]">
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
          <Nav className="bg-[#212529] p-2">
            <Nav.Link href="#deets">AboutUs</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                MSOB
            </Nav.Link>
            
          </Nav>
          <div className="bg-[#212529] p-2">
          <button type="button" className="btn btn-danger mr-3 ml-2" onClick={()=> router.push('/favourites') }>
              <MdFavorite className="text-2xl " /> <span className="badge badge-light">{favqty}</span>
            </button>
            <button type="button" onClick={() =>{
                router.push('/carts');
                setShowcart(true)
            }} className="btn btn-success">
              <MdShoppingCart className="text-2xl " /> <span className="badge badge-light">{totalQty}</span>
          </button>
          </div>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  )
}


// <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>