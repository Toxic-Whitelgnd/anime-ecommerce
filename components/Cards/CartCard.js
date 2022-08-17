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

export default function CartCard({name,price,pimage,product,quantity,size}) {
    const {totalprice,totalQty,cartItem,setShowcart,qty,onNewSize,onRemove,toggleCartItemQuantity,setcartItem} = useStateContext();
    const [sizeo,setSizeo] = useState('S Default');
    const router = useRouter();

    let x = onNewSize(product, size)
    console.log(x);

    useEffect(() =>{
      const cartitemrev = window.localStorage.getItem('cartitmes');
      setcartItem(JSON.parse(cartitemrev));
  },[])
  useEffect(()=>{
      window.localStorage.setItem("cartitmes",JSON.stringify(cartItem));
  })

  return (
    <div> 
        <div className='flex flex-wrap justify-center text-center'>
        
        <div>
        <img src={urlFor(pimage)}  alt="cart-imag" width={250} height={250} />
        </div>
        <Card style={{ width: '20rem',border: '1px solid' ,height: '18rem' ,backgroundColor:'#fa948c'}}>
            <Card.Body>
              <div><div className=' text-3xl sm:mt-2' onClick={()=> onRemove(product) } ><BiTrash className='text-red-500 text-xl' /></div></div>
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
                <h6 className='text-xl font-kanit'> {size === 'S'?onNewSize(product,sizeo):size}</h6>
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
