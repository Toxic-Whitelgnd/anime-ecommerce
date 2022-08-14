import React from 'react'
import { urlFor } from '../../lib/client';
import getStripe from "../../lib/getStripe"
import { Button } from 'react-bootstrap';
import {useRouter} from "next/router"
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import {BiTrash} from "react-icons/bi"
import { useStateContext } from '../../context/StateConTexT';
import Card from 'react-bootstrap/Card';

export default function CartCard({name,price,pimage,product,quantity}) {
    const {totalprice,totalQty,cartItem,setShowcart,qty,onRemove,toggleCartItemQuantity} = useStateContext();
    const router = useRouter();

    

  return (
    <div> 
        <div className='flex flex-wrap justify-center text-center'>
        
        <div>
        <img src={urlFor(pimage)}  alt="cart-imag" width={250} height={250} />
        </div>
        <Card style={{ width: '20rem',border: '1px solid' ,height: '14rem' ,backgroundColor:'#fa948c'}}>
            <Card.Body>
                <Card.Title className="text-3xl capitalize"><h3>{name}</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Price info</Card.Subtitle>
                <Card.Title>
                <h6 className='text-xl'>₹ {price}</h6>
                </Card.Title>
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
                <div className=' text-3xl sm:mt-2' onClick={()=> onRemove(product) } ><BiTrash className='text-red-500 text-xl' /></div>
            </Card.Body>
        </Card>
    </div>
    </div>
  )
}
