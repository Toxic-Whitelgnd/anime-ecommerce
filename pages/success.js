import Head from 'next/head';
import React,{useEffect} from 'react'
import { Order_success } from '../lib/utils'
import Button from 'react-bootstrap/Button';
import {useRouter} from "next/router"
import { useStateContext } from '../context/StateConTexT';


export default function Success_Order() {

    const {onADDtocart,qty,favqty,onADDFavitem,cartItem,setcartItem} = useStateContext();

    useEffect(() =>{
        Order_success();
        setcartItem([]);
    },[]);
    const router = useRouter();
    

  return (
    <>
    <Head>
        <title>success</title>
    </Head>
    <div className="mt-24">
        <div>
            <h1 className="text-center mt-3">Thank  you for your Order</h1>
        </div>
        <div className="flex justify-center ">
        <div className='block mt-2'>
            <h1 className="italic mt-5">We are Are very Happy to revice your Orders</h1>
            <h3 className="mt-4">If you face any problems Please free to contact this mail</h3>
            <h6 className="bold text-center">akatsukiorganisation999@gmail.com</h6>
            <div className="flex justify-center mt-5 mb-7">
            <Button onClick={()=> router.push('/')} variant="dark" className=''>Continue Shoppping</Button>
            </div>
        </div>
        </div>
    </div>
    
    </>
  )
}
