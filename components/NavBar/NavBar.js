import React, { useState,useEffect } from 'react';
import {useRouter} from "next/router";

// NavBar components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdFavorite, MdShoppingCart } from "react-icons/md";



// importing functionalities
import { useStateContext } from '../../context/StateConTexT';
import { collection, getDocs } from "firebase/firestore";
import {db,app} from "../../firebase/firebaseconfig"
import toast from 'react-hot-toast';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function NavBar() {

  const router = useRouter();

  const {favqty, totalprice,totalQty,setTotalQty,cartItem,setqty,setShowcart,qty,onNewSize,onRemove,toggleCartItemQuantity,setcartItem} = useStateContext();

  const [data,setdata]= useState([]);
  
  const auth = getAuth(app);
  const [user1,setuser] = useState(null);

  useEffect(()=>{
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setuser(user);
      } else {
        // User is signed out
        // ...
      }
    });
  
  },[]);

  useEffect(() =>{
    let timer1 = setTimeout(() =>  getdata(), 5 * 1000);
    
     return () => {
      clearTimeout(timer1);
    };
  });

if(user1 === null){
    console.log("no user1 found");
}
else{
    // console.log("from navbar"+user1.uid)
}
  
  const getdata = async () =>{
    const querySnapshot = await getDocs(collection(db,user1.email));
    data = querySnapshot.docs.map(doc => {
      return {
          ...doc.data(),
          id:doc.id
         } 
  } );
    setdata(data);
    setcartItem(data);
    
  }

  return (
   <div>
    
   <Navbar collapseOnSelect className="h-20 bg-[#212529]" expand="lg" bg="dark" variant="dark"  fixed="top" >
      <Container >
        <Navbar.Brand  href="/">AkaStores </Navbar.Brand>
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
              <NavDropdown.Item href="/comingsoon">
                Coming soon.
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="bg-[#212529] p-2">
            <Nav.Link href="/aboutus">AboutUs</Nav.Link>   
            {/* <Nav.Link href="/auth">User</Nav.Link>    */}
          </Nav>
          <div className="bg-[#212529] p-2">
          <button type="button" className="btn btn-danger mr-3 ml-2" onClick={()=> router.push('/favourites') }>
              <MdFavorite className="text-2xl " /> <span className="badge badge-light">{favqty}</span>
            </button>
            <button type="button" onClick={() =>{
                router.push('/carts');
                setShowcart(true)
            }} className="btn btn-success">
              <MdShoppingCart className="text-2xl " /> <span className="badge badge-light">{data.length}</span>
          </button>
    
          </div>
          
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>

  )
}


// <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>