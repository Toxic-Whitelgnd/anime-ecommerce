import React from 'react'
import Image from "next/image"
import Tilt from 'react-parallax-tilt';
import { urlFor } from '../../lib/client';
import { Button } from 'react-bootstrap';
import {useRouter} from "next/router"
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import { useStateContext } from '../../context/StateConTexT';

export default function HovCards({pimage,name,brand,price,slug,key,product}) {
    const {onADDtocart,qty,favqty,onADDFavitem} = useStateContext();
    const router = useRouter();
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
                    <h3 className="text-red-600 capitalize">{name}</h3>
                    <p className='capitalize'>Brand: {brand}</p>
                    <h6>Price:₹ {price}</h6>
                </div>
                <div>

                <a onClick={()=> onADDtocart(product,qty)} className="btn btn-success  mr-2"><MdShoppingCart  /></a>
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
