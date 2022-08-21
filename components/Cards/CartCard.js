import React,{useState,useEffect} from 'react'
import { urlFor } from '../../lib/client';
import getStripe from "../../lib/getStripe"
import { Button } from 'react-bootstrap';
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



export default function CartCard({name,price,pimage,product,quantity,size,pid,index}) {
    const {totalprice,totalQty,cartItem,setShowcart,qty,onNewSize,onRemove,toggleCartItemQuantity,setcartItem} = useStateContext();
    const [sizeo,setSizeo] = useState('S');
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
            // https://firebase.google.com/docs/reference/js/firebase.User
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
        <Card style={{ width: '20rem',border: '1px solid' ,height: '18rem' ,backgroundColor:'#fa948c'}}>
            <Card.Body>
              <div><div className=' text-3xl sm:mt-2' onClick={()=> {
                onDelete(pid);
                onRemove(product)
                
              }  } ><BiTrash className='text-red-500 text-xl' /></div></div>
                <Card.Title className="text-3xl capitalize"><h3 className='font-wetpaint'>{name}</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted font-teko">info</Card.Subtitle>
                <Card.Title>
                <h6 className='text-xl font-kanit'>₹ {price}</h6>
                </Card.Title>
                <div className=''>
                <Card.Title>
                <div className="w-36">
                <Form.Select aria-label="Selcet your Size" onChange={(e)=> setSizeo(e.target.value)} >
                    <option value="S">Selct your Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </Form.Select>
                </div>
                {size === 'S'?onNewSize(product, sizeo):size}
                {/* <h6 className='text-xl font-kanit'>{size === 'S'? sizeo : size} </h6> */}
                {/* <h6 className='text-xl font-kanit'> {sizeo} </h6> */}
                </Card.Title>
                </div>
                <div className="mt-4">
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
                </div>
                
            </Card.Body>
        </Card>
    </div>
    </div>
  )
}
