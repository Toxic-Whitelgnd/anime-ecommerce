import React,{useState,useEffect} from 'react'
import Image from "next/image"
import Tilt from 'react-parallax-tilt';
import { urlFor } from '../../lib/client';
import { Button } from 'react-bootstrap';
import {useRouter} from "next/router"
import {MdShoppingCart } from "react-icons/md";
import {BiTrash} from "react-icons/bi"
import { useStateContext } from '../../context/StateConTexT';

// for serverside
import { collection, addDoc,doc,deleteDoc } from "firebase/firestore"; 
import {db,app} from "../../firebase/firebaseconfig"

import toast from 'react-hot-toast';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function FavCards({pimage,pid,name,brand,price,slug,key,product}) {
    const {onADDtocart,qty,onRemoveFav} = useStateContext();
    const router = useRouter();

    const auth = getAuth(app);
    const cuser = auth.currentUser;

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

    // this is for pushing the data into the cart if user likes
    const pushdata = async () =>{
        if(user1 !== null){
            const db1Ref = collection(db,user1.email);
            try {
                addDoc(db1Ref,product)
                console.log("sened successfully",db1Ref.id);
            }
            catch (e){
                console.error("Error adding document: ", e);
            }
        }
        else{
            toast.error("Sigin to use Carts.The product will be temporarily stored in local storage")
        }
       
    }

    // if the user did not like this product to remove from fav
    const onDelete = async (pid) =>{
        if(user1 !== null){
          console.log(typeof(pid));
    
          const dba = doc(db,user1.uid,pid)
      
        
      
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
                    <h3 className="text-red-600 font-wetpaint">{name}</h3>
                    <p className='capitalize font-rajdhani'>Brand: <span className='font-kanit'>{brand}</span></p>
                    <h6 className="font-lobster">Price:<span className='font-kanit'>??? {price}</span></h6>
                </div>
                <div>

                <a onClick={()=> {
                    onADDtocart(product,qty,'S')
                    pushdata();
                }} className="btn btn-success  mr-2"><MdShoppingCart  /></a>
                <a onClick={()=> {
                    onRemoveFav(product)
                    onDelete(pid);
                }} className="btn btn-danger  mr-2"><BiTrash  /></a>
               
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
