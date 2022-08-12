import DefaultLayout from '../../Layout/Layout'
import img1 from "../../images/jackets/jacket2.png"
import Image from "next/image"

import React,{useRef} from 'react';
import Link from "next/link";
import {AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineRight,AiOutlineShopping} from "react-icons/ai";
import {TiDeleteOutline} from "react-icons/ti"
import toast from "react-hot-toast";

import { useStateContext } from '../../context/StateConTexT';
import { urlFor } from '../../lib/client';
import { Button } from 'bootstrap';
import { isRegularExpressionLiteral } from 'typescript';

export default function CartItems() {
    const cartRef = useRef();
    const {totalprice,totalQty,cartItem,setShowcart,qty} = useStateContext();
  return (
    <DefaultLayout>
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
                                //   decqty();
                                }} className="btn btn-danger mr-4">-</button>
                                <span className="text-xl   border-2 pt-1 pb-1 pr-2 pl-2">
                                {qty}
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

    
        </div>

                        </div>
                        </>
                    ))
                }

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