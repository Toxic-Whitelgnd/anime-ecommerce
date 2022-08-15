import React from 'react'
import Button from 'react-bootstrap/Button';
import {useRouter} from "next/router"

export default function Cancel() {
    const router = useRouter();
  return (
    <div className="mt-24">
        <div>
            <h1 className="text-center mt-3">Your Order is Successfully Canceled</h1>
        </div>
        <div className="flex justify-center ">
        <div className='block mt-2'>
            <h1 className="italic mt-5">you have cancelled your Orders </h1>
            <h3 className="mt-4">If money is deducted  Please free to contact this mail</h3>
            <h6 className="bold text-center">akatsukiorganisation999@gmail.com</h6>
            <div className="flex justify-center mt-5 mb-7">
            <Button onClick={()=> router.push('/')} variant="dark" className=''>Continue Shoppping</Button>
            </div>
        </div>
        </div>
    </div>
  )
}
