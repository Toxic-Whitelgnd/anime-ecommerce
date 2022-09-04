import React,{useState,useEffect} from 'react'
import { urlFor } from '../../lib/client';
import getStripe from "../../lib/getStripe"
import  Button  from 'react-bootstrap';
import {useRouter} from "next/router"
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import {BiTrash} from "react-icons/bi"
import { useStateContext } from '../../context/StateConTexT';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import {getFirestore, doc, deleteDoc,getDocs,collection} from "firebase/firestore";

import {db,app} from "../../firebase/firebaseconfig"

import toast from 'react-hot-toast';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SizeCard from './SizeCard';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


export default function CartCard({name,price,pimage,product,quantity,slug,size,pid,index}) {
    const {totalprice,totalQty,cartItem,setShowcart,qty,onNewSize,onRemove,toggleCartItemQuantity,setcartItem} = useStateContext();
   
    const router = useRouter();

    useEffect(() =>{
      console.log(cartItem.length);
      
  },[]);

  const [data,setdata]= useState([]);

  const auth = getAuth(app);  
  const [user1,setuser] = useState(null);

  useEffect(() =>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
           
            const uid = user.uid;
            setuser(user);
           
          } else {
            // User is signed out
            // ...
          }
        });
      
  });
  if(user1 === null){
      console.log("no user1 found");
  }
  else{
      // console.log("from hovcards"+user1.uid)
  }
  
  const onDelete = async (pid) =>{
    if(user1 !== null){
      console.log(typeof(pid));

      const dba = doc(db,user1.email,pid)
  
    
  
      await deleteDoc(dba)
      .then(() => {
          console.log("Entire Document has been deleted successfully."+pid)
          toast.success(`${product.name} has been deleted successfully!`);
      })
      .catch(error => {
          console.log(error);
      })
    }
    else{
      console.log('error mff');
    }
    

};
  
   



  return (
    <div> 
        <div className='flex flex-wrap justify-center text-center'>
        
        <div>
        <img src={urlFor(pimage)}  alt="cart-imag" width={250} height={250} />
        </div>
        {/* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; */}
        <Card style={{ width: '20rem',border: '1px solid' ,height: '20rem' ,backgroundColor:'#fa948c', boxShadow:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'}}>
            <Card.Body>
              <div><div className=' text-3xl sm:mt-2' onClick={()=> {
                onDelete(pid);
                onRemove(product)
                
              }  } ><BiTrash className='text-red-500 text-xl' /></div></div>
                <Card.Title className="text-3xl capitalize"><h3 className='font-wetpaint'>{name}</h3></Card.Title>
                <Card.Subtitle onClick={()=> {router.push(`/product/${slug}`)}} className="mb-2 text-muted font-teko text-blue-500 cursor-pointer">View</Card.Subtitle>
                <Card.Title>
                <h6 className='text-xl font-kanit'>₹ {price}</h6>
                </Card.Title>
                <div className=''>
                <Card.Title>
                <div>
                  <SizeCard
                    type={size} //this is shoulld be dynamic as i need to update the schema
                    product={product}
                  />
                </div>
                </Card.Title>
                </div>
                {/* <div className="mt-4">
                                <button type="button" onClick={()=>{
                                console.log("pressed on plus");  
                                toggleCartItemQuantity(product._id,'dec');
                                }} className="btn btn-danger mr-4 text-xs">-</button>
                                <span className="text-xl   border-2 pt-1 pb-1 pr-2 pl-2">
                                {quantity}
                                </span>
                                <button type="button"onClick={()=>{
                                console.log("pressed on minus"); 
                                toggleCartItemQuantity(product._id,'inc');
                                }} className="btn btn-success ml-4">+</button>
                </div> */}
                <div>
                <OverlayTrigger
                    trigger="click"
                    key="right"
                    placement="top"
                    overlay={
                      <Popover>
                        <Popover.Header as="h3">Quantity Update</Popover.Header>
                        <Popover.Body>
                          <strong>Quantity can be Updated!</strong> While Making a Payment!
                          <div className='mt-3'>
                            <h6>To test the Payment.Use this Card</h6>
                            <b>4242 4242 4242 4242</b>
                            <p>ExpiryMonth - <b>12/35</b> cv - <b>999</b></p>
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <a className='ml=3 no-underline cursor-pointer text-red-500'>Note</a>
                  </OverlayTrigger>
                </div>
            </Card.Body>
        </Card>
    </div>
    </div>
  )
}
