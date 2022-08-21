import React,{useEffect,useState} from 'react'
import Image from "next/image"
import Tilt from 'react-parallax-tilt';
import { urlFor } from '../../lib/client';
import { Button } from 'react-bootstrap';
import {useRouter} from "next/router"
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import { useStateContext } from '../../context/StateConTexT';

// trying by my own
import { collection, addDoc } from "firebase/firestore"; 
import {db,app} from "../../firebase/firebaseconfig"

import toast from 'react-hot-toast';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function HovCards({pimage,name,brand,price,slug,key,product}) {
    const {onADDtocart,qty,favqty,onADDFavitem,cartItem,setcartItem} = useStateContext();
    const router = useRouter();
    // useEffect(() =>{
    //     const cartitemrev = window.localStorage.getItem('cartitmes');
    //     setcartItem(JSON.parse(cartitemrev));
    // },[])
    // useEffect(()=>{
    //    sessionStorage.setItem("cartitmes",JSON.stringify(cartItem));
    //     let token = sessionStorage.getItem('Token');
    //     // console.log(token);
    // })

    const auth = getAuth(app);
    const cuser = auth.currentUser;


    if (cuser === null){
       console.log("no current user");
       
    }

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

 
    // trying by my own
   
    const pushdata = async () =>{
        const db1Ref = collection(db,user1.email);
        try {
            addDoc(db1Ref,product)
            console.log("sened successfully",db1Ref.id);
        }
        catch (e){
            console.error("Error adding document: ", e);
        }
    }
    


  return (
        <>
    <div className="flex flex-wrap">
        <div className=' m-6' >
            <div className='bg-blue border-4 w-80 h-auto p-4 border-black shadow-2xl shadow-black-500/50' key={key}>
                <div className="mb-8 duration-500 hover:scale-150"> 
                    <Tilt>
                        <img src={urlFor(pimage)} alt="testing" width={400} height={400} />
                    
                    </Tilt>
                </div>
                <div>
                    <h3 className="text-red-600 capitalize font-wetpaint">{name}</h3>
                    <p className='capitalize font-rajdhani'>Brand: <span className='font-kanit'>{brand}</span></p>
                    <h6 className="font-lobster">Price:<span className='font-kanit'>₹ {price}</span></h6>
                </div>
                <div>

                <a onClick={()=> {
                    onADDtocart(product,qty,'S');
                    pushdata();
                }} className="btn btn-success  mr-2"><MdShoppingCart  /></a>
                <a onClick={()=> {
                    console.log("Successfully");
                    onADDFavitem(product);
                } } className="btn btn-danger mr-4 "><MdFavorite /></a>
               <Button onClick={()=>{
                    router.push(`/product/${slug}`)
                }}  variant="dark">View</Button>
                </div>
                
            </div>
        </div>
    
    </div>
        </>
  )
}
