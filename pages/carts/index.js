import DefaultLayout from '../../Layout/Layout'
import Head from "next/head"

import React,{useRef,useState,useEffect} from 'react';
import Link from "next/link";
import {AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineRight,AiOutlineShopping} from "react-icons/ai";

import toast from "react-hot-toast";

import { useStateContext } from '../../context/StateConTexT';
import { urlFor } from '../../lib/client';
import getStripe from "../../lib/getStripe"
import CartCard from '../../components/Cards/CartCard';
import Card from 'react-bootstrap/Card';
import {BiTrash} from "react-icons/bi"
import Form from 'react-bootstrap/Form';


// my own
import { collection, getDocs } from "firebase/firestore";
import {db,app} from "../../firebase/firebaseconfig"

export default function CartItems() {
    const cartRef = useRef();
    const [size,setSize] = useState('S');

    const [data,setdata]= useState([]);
    const [firedata,setFiredata] = useState([]);

    let pqty = 0;
        

    const {totalprice,totalQty,setTotalQty,cartItem,setqty,setShowcart,qty,onNewSize,onRemove,toggleCartItemQuantity,setcartItem} = useStateContext();
    useEffect(() =>{
        const cartitemrev = window.localStorage.getItem('cartitmes');
        setcartItem(JSON.parse(cartitemrev));
        getdata();

    },[])
    useEffect(()=>{
        window.localStorage.setItem("cartitmes",JSON.stringify(cartItem));
    });

    const [sizeo,setSizeo] = useState('S');
    const pid = [];

    const getdata = async () =>{
        const querySnapshot = await getDocs(collection(db,"usertkn"));
        querySnapshot.forEach((doc) => {
           return {
            ...doc.data(),
            id:doc.id
           }       
        })
        setFiredata(querySnapshot);
        console.log("fd"+querySnapshot);

        data = querySnapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id:doc.id
               } 
        } );
        console.log();
        setdata(data);
        console.log("done after");
        setcartItem(data);
        pqty = cartItem.length
        // setTotalQty(pqty);
        totalQty = totalQty + pqty;
        console.log("done after cartitems");

        console.log("seprate");
     
    }

    const handleCheckOut = async ()=> {

        console.log('came to func');
        const stripe = await getStripe();

        console.log('came to response');

        var str = JSON.stringify(cartItem);
        // var par = JSON.parse(str);

        const response = await fetch('/api/Stripe',{
            method:'POST',
            headers: {
                'Content-type':'application/json'
            },
            body:  JSON.stringify(cartItem),
        });

        console.log('calling response');

        if(response.statusCode === 500) return;


        const data = await response.json();

        console.log("sessionid mfff:"+data);

        toast.loading("Hold on a sec Redirecting to Pyament Page ");

        stripe.redirectToCheckout({ sessionId: data.id});

    }
    let  ttprice = 0;
    const totlprice = (price) =>{
        ttprice += price;
        return ttprice;
    }

  return (
    
    <>
        <Head>
        <title>Carts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mt-24'></div>
      {/* <div>
        {
            data.map( d =>(
                <>
                <p>{d.id}</p>
                </>
            ))
        }
      </div> */}
        <div className="bg-[#eb8a8a]" ref={cartRef}>
            <h2 className='font-silkscreen'>Your Cart (<span className='text-red-500'>{data.length}</span> Items)</h2>
           

            {
                
                cartItem.length < 1 && (
                    <div>
                        <div className="flex justify-center text-center"> 
                        <h1 className="font-marker">Your Cart is Empty</h1>
                        </div>
                        <div className="flex justify-center text-center"> 
                        <AiOutlineShopping className='text-9xl' />
                        </div>
                        
                    </div>
                )
            }
            <div>
                {
                    cartItem.length >= 1 && cartItem.map((item,index)=>(
                        
                        <>
                        <hr className="border-2"></hr>
                        <h6 className='opacity-0'>{totlprice(item.price)}</h6>
                        <div className="flex flex-wrap justify-center text-center bg-[#eb8a8a]">
                            
                                <>
                                <h1 className="font-glitch">{item.name} - {item.id}</h1>
                                <CartCard 
                                name={item.name}
                                price={item.price}
                                pimage={item.image}
                                product={item}
                                quantity={item.quantity}
                                size={item.size}
                                pid = {item.id}
                                index={index}
                                />
                                </>
                                
                           
                        
                        </div>
                        
                        </>
                    ))
                }
            <div>
                {
                    cartItem.length >=1 &&  (
                        <div>
                            <hr className="border-4"></hr>
                            
                            <div className="flex flex-wrap justify-center text-center mt-4">
                                
                                <h3 className="font-lobster">Total:₹ {ttprice}</h3>
                            </div>
                            <div className="flex flex-wrap justify-center text-center mt-4 mb-5">
                                <button className="btn btn-primary" onClick={ handleCheckOut}><span className="font-rajdhani">Buy Now</span> </button>
                                </div>
                            <hr className="border-4"></hr>
                        </div>
                    )
                }


            </div>
      

            </div>
        </div>
    
    <div>
        
        

     </div>
     </>
  )
}

{/* <div className='flex flex-wrap'>
            <div className="m-3 border-4 h-64 w-2/5">
       
                <div className="flex flex-wrap ">
                        <Image src={img1} alt="cart" className='float-left' width={200} height={200} />
                        <div className="block ml-6">
                            <h3 className="mt-4">Jacket</h3>
                            <h3 className="mt-4">price</h3>
                            <div className="mt-4">
                                <button type="button" onClick={()=>{
                                console.log("pressed on plus");  
                                //   decqty();
                                }} className="btn btn-danger mr-4">-</button>
                                <span className="text-xl   border-2 pt-1 pb-1 pr-2 pl-2">
                                0
                                </span>
                                <button type="button"onClick={()=>{
                                console.log("pressed on minus"); 
                                //   incqty() ;
                                }} className="btn btn-success ml-4">+</button>
                            </div>
                        </div> 
                        <h4 className='ml-40'>x</h4>
                </div>
            </div>

    
        </div> */}


// await setDoc(doc(db,"usertkn",product._id),product) custom


        // catrtsss orginal

        // <img src={urlFor(item.image)} alt="cart" className='float-left' width={200} height={200} />
        //                 <div className="block ml-6">
        //                     <h3 className="mt-4">{item.name}</h3>
        //                     <h3 className="mt-4">₹ {item.price}</h3>
        //                     <div className="mt-4">
        //                         <button type="button" onClick={()=>{
        //                         console.log("pressed on plus");  
        //                         toggleCartItemQuantity(item._id,'dec');
        //                         }} className="btn btn-danger mr-4">-</button>
        //                         <span className="text-xl   border-2 pt-1 pb-1 pr-2 pl-2">
        //                         {item.quantity}
        //                         </span>
        //                         <button type="button"onClick={()=>{
        //                         console.log("pressed on minus"); 
        //                         toggleCartItemQuantity(item._id,'inc');
        //                         }} className="btn btn-success ml-4">+</button>
        //                     </div>
        //                 </div> 
        //                 <div className='mt-6 ml-40' onClick={()=> onRemove(item) } ><TiDeleteOutline className='text-red-500 text-xl' /></div>