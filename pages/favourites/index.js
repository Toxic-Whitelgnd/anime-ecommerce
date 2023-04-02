import React,{useState,useEffect} from 'react'
import DefaultLayout from '../../Layout/Layout'
import { useStateContext } from '../../context/StateConTexT';
import { urlFor } from '../../lib/client';
import Button from 'react-bootstrap/Button';
import FavCards from '../../components/Cards/FavCards';

// dfdf
import { collection, getDocs } from "firebase/firestore";
import {db,app} from "../../firebase/firebaseconfig"
import toast from 'react-hot-toast';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Favourites_item() {

    const {totalprice,totalQty,setTotalQty,setFavitem,cartItem,setqty,setShowcart,qty,onNewSize,onRemove,Favitem,toggleCartItemQuantity,setcartItem} = useStateContext();

    const auth = getAuth(app);
    const [user1,setuser] = useState(null);

    const [data,setdata]= useState([]);
    const [favdata,setfavdata] = useState([]);

    // checkin the current user
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
        
    },[]);

    // getting the data before the page pre rendering
    useEffect(() =>{
        let timer1 = setTimeout(() =>  getdata(), 1 * 1000);
        
         return () => {
          clearTimeout(timer1);
        };
      });

      const getdata = async () =>{
        if(user1 !== null){
            const querySnapshot = await getDocs(collection(db,user1.uid));
        querySnapshot.forEach((doc) => {
           return {
            ...doc.data(),
            id:doc.id
           }       
        })


        data = querySnapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id:doc.id
               } 
        } );
        setfavdata(data);
       
        setFavitem(data);
        }
        else{
            toast.error("please signin to use this service");
        }
        
    

     
    }
  return (
    <div>
        <>
        <div className='mt-24'></div>
            <div>
            <h1 className='font-silkscreen'>Favourite Items (<span className='text-red-500'>{Favitem.length}</span> Items)</h1>
                {
                    Favitem.length < 1 && (
                        <>
                        <div className="flex justify-center mt-10">
                            <h1 className='font-marker'>Your Favourites item List is Empty</h1>
                        </div>
                        <div className='mt-4 flex justify-center'>
                            <Button variant="light"  href='/'><span className="font-rajdhani">Continue Shopping</span></Button>
                        </div>
                        </>
                    )
                }
            </div>
            
                <div className="an-back bg-[#] flex flex-wrap justify-center">
                {
                    Favitem.length >= 1 && Favitem.map((item)=>(
                        <>
                        <div className="flex flex-wrap">
                            <FavCards 
                            name={item.name}
                            pimage={item.image}
                            brand={item.brand}
                            price={item.price}
                            slug={item.slug.current}
                            key ={item._id }
                            product={item}
                            pid={item.id}

                            />
                        </div>
                        </>
                    )) 
                }
            </div>
        </>
    </div>
  )
}
