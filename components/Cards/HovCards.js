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

export default function HovCards({pimage,name,brand,price,slug,key,product,newprice}) {
    const {onADDtocart,qty,favqty,onADDFavitem,cartItem,setcartItem} = useStateContext();
    const router = useRouter();
    

    const auth = getAuth(app);
    const cuser = auth.currentUser;


    if (cuser === null){
    //    console.log("no current user");
       
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
        // console.log("no user1 found");
    }
    else{
        // console.log("from hovcards"+user1.uid)
    }

 
    // trying by my own
   
    const pushdata = async () =>{
        if(user1 !== null){
            const db1Ref = collection(db,user1.email);
            try {
                addDoc(db1Ref,product)
                console.log("sended successfully",db1Ref.id);
            }
            catch (e){
                console.error("Error adding document: ", e);
            }
        }
        else{
            toast.error("Sigin to use Carts.The product will be temporarily stored in local storage")
        }
       
    }

    // trying for favourites
    const pushdataFav = async () =>{
        if(user1 !== null){
            // iam sending to userid bez\coz to avoid confusion
            const db1Ref = collection(db,user1.uid);
            try {
                addDoc(db1Ref,product)
                console.log("sened successfully",db1Ref.id);
            }
            catch (e){
                console.error("Error adding document: ", e);
            }
        }
        else{
            toast.error("Sigin to use Favourites.The product will be temporarily stored in local storage")
        }
    }
    
    const ifnewprice = (price,newprice)=>{
        return(
            <>
                <del>{price}</del> new OffPrice ₹<span className='text-red-800'>{newprice}</span>
            </>
        )
    }

  return (
        <>
    <div className="an-card-main flex flex-wrap">
        <div className='an-card m-6' >
            <div className='an-card-row bg-blue border-4 w-80 h-auto p-2 border-black shadow-2xl shadow-black-500/50' key={key}>
                <div className="an-card-tilt mb-8 duration-500 hover:scale-150"> 
                    <Tilt>
                        <img src={urlFor(pimage)} className='an-card-img' alt="testing" width={400} height={400} />
                    
                    </Tilt>
                </div>
                <div className='an-card-side'>
                    <h3 className="an-card-text text-red-600 capitalize font-wetpaint">{name}</h3>
                    <p className='capitalize font-rajdhani'>Brand: <span className='font-kanit'>{brand}</span></p>

                    <h6 className="font-lobster">Price:<span className='font-kanit ml-2'>₹{newprice?ifnewprice(price,newprice):price}</span></h6>

                    <div className='an-card-btn'>

                <a onClick={()=> {
                    onADDtocart(product,qty,'S');
                    pushdata();
                }} className="an-card-sbtn btn btn-success justify-center mr-2"><MdShoppingCart  /></a>
                <a onClick={()=> {
                    console.log("Successfully");
                    onADDFavitem(product);
                    pushdataFav();
                } } className="an-card-sbtn btn btn-danger mr-4 "><MdFavorite /></a>
               <Button className='an-card-vbtn' onClick={()=>{
                    router.push(`/product/${slug}`)
                }}  variant="dark"><span id='vi'>View</span></Button>
                </div>

                </div>
                
                
            </div>
        </div>
    
    </div>
        </>
  )
}
