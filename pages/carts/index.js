import DefaultLayout from '../../Layout/Layout'
import Head from "next/head"

import React,{useRef} from 'react';
import Link from "next/link";
import {AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineRight,AiOutlineShopping} from "react-icons/ai";
import {TiDeleteOutline} from "react-icons/ti"
import toast from "react-hot-toast";

import { useStateContext } from '../../context/StateConTexT';
import { urlFor } from '../../lib/client';
import getStripe from "../../lib/getStripe"

export default function CartItems() {
    const cartRef = useRef();
    const {totalprice,totalQty,cartItem,setShowcart,qty,onRemove,toggleCartItemQuantity} = useStateContext();

    const handleCheckOut = async ()=> {

        console.log('came to func');
        const stripe = await getStripe();

        console.log('came to response');

        var str = JSON.stringify(cartItem);
        var par = JSON.parse(str);

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

        toast.loading("redirectiong to paymentpage ");

        stripe.redirectToCheckout({ sessionId: data.id});

    }

  return (
    
    <DefaultLayout>
        <Head>
        <title>Carts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="" ref={cartRef}>
            <h2>Your Cart Items {totalQty}</h2>
            {
                cartItem.length < 1 && (
                    <div>
                        <div className="flex justify-center text-center"> 
                        <h1>Your Cart is Empty</h1>
                        </div>
                        <div className="flex justify-center text-center"> 
                        <AiOutlineShopping className='text-9xl' />
                        </div>
                        
                    </div>
                )
            }
            <div>
                {
                    cartItem.length >= 1 && cartItem.map((item)=>(
                        <>
                        <div key={item._id}>
                        <div className='flex flex-wrap'>
            <div className="m-3 border-4 h-64 w-2/5">
       
                <div className="flex flex-wrap ">
                        <img src={urlFor(item.image)} alt="cart" className='float-left' width={200} height={200} />
                        <div className="block ml-6">
                            <h3 className="mt-4">{item.name}</h3>
                            <h3 className="mt-4">₹ {item.price}</h3>
                            <div className="mt-4">
                                <button type="button" onClick={()=>{
                                console.log("pressed on plus");  
                                toggleCartItemQuantity(item._id,'dec');
                                }} className="btn btn-danger mr-4">-</button>
                                <span className="text-xl   border-2 pt-1 pb-1 pr-2 pl-2">
                                {item.quantity}
                                </span>
                                <button type="button"onClick={()=>{
                                console.log("pressed on minus"); 
                                toggleCartItemQuantity(item._id,'inc');
                                }} className="btn btn-success ml-4">+</button>
                            </div>
                        </div> 
                        <div className='mt-6 ml-40' onClick={()=> onRemove(item) } ><TiDeleteOutline className='text-red-500 text-xl' /></div>
                </div>
            </div>

    
            </div>

                        </div>
                        </>
                    ))
                }
            <div>
                {
                    cartItem.length >=1 && (
                        <div>
                            <hr></hr>
                            <div className="flex flex-wrap justify-center text-center">
                                <h3>Total:₹ {totalprice}</h3>
                            </div>
                            <div className="flex flex-wrap justify-center text-center mt-4">
                                <button className="btn btn-primary" onClick={ handleCheckOut}> Buy Now </button>
                                </div>
                        </div>
                    )
                }


            </div>

            </div>
        </div>
    
    <div>
        
        

     </div>
    </DefaultLayout>
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