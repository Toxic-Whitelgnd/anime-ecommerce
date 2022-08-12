import React from 'react'
import Image from "next/image"
import Tilt from 'react-parallax-tilt';
import { urlFor } from '../../lib/client';
import { Button } from 'react-bootstrap';
import {useRouter} from "next/router"


export default function HovCards({pimage,name,brand,price,slug}) {
    const router = useRouter();
  return (
        <>
    <div className="flex flex-wrap">
        <div className=' m-6' >
            <div className='bg-blue border-4 w-80 h-auto p-4 border-black shadow-2xl shadow-black-500/50'>
                <div className="mb-8 duration-500 hover:scale-150"> 
                    <Tilt>
                        <img src={urlFor(pimage)} alt="testing" width={400} height={400} />
                    
                    </Tilt>
                </div>
                <div>
                    <h3 className="text-red-600">{name}</h3>
                    <p>Brand: {brand}</p>
                    <h6>Price:₹ {price}</h6>
                </div>
                <Button onClick={()=>{
                    router.push(`/product/${slug}`)
                }}  variant="dark">View</Button>
            </div>
        </div>
    
    </div>
        </>
  )
}
