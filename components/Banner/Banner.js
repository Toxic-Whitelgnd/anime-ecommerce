import React from 'react'
import img1 from "../../images/tshirt/akajacket.png"
import img2 from "../../images/tshirt/akajacket2.png"
import Image from "next/image"
import Button from 'react-bootstrap/Button';
import Tilt from 'react-parallax-tilt';
import {useRouter} from "next/router"

export default function Banner_Product({sale,name,captions,oldprice,newprice,key,image1,slug}) {
    const router = useRouter();
  return (
    
    <div  className='bg-black   h-auto m-4 border-2  border-stone-500 rounded-xl'>
        <div className=' m-4 '>
            <h2 className='text-red-500'>{sale}</h2>
            <h5 className='text-red-400'>{name}</h5>
            <div className='flex flex-wrap justify-center align-center text-center'>
            
            <div className="mb-8 duration-500 hover:scale-150"> 
                <Tilt>
                <Image src={img1} alt={"sdf sdfd "} width={300} height={350} />
                </Tilt>
            </div>
                
            <div className="mb-8 duration-500 hover:scale-125"> 
                <Tilt>
                <Image src={img2} alt={"sdf sdfd "} width={300} height={350} />
                </Tilt>
            </div>
            </div>
            <div>
                <h4 className='text-red-600'>{captions}</h4>
                <h5 className='text-red-500'>Buy for : ₹ <del className='text-red-200'>{oldprice}</del> - ₹<span className=' text-red-700'>{newprice}</span></h5>
            </div>
            <div className='mt-4'>
            <Button onClick={()=> router.push(`bannersales/${slug}`)} variant="danger">Buy Now</Button>
            </div>
        </div>

    </div>
  )
}
