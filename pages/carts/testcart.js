import React,{useEffect} from 'react'
import CartCard from '../../components/Cards/CartCard';

export default function TestCart() {


    useEffect(() => {
        const cartitemrev = window.localStorage.getItem('cartitmes');
        const zz = (JSON.parse(cartitemrev));
        console.log(zz);
       
    });

  return (
    <>
    <div className="mt-24"></div>
    <div>TestCart</div>
    <div>
       {/* {
         zz.length < 1 && (
            <div>
                <div className="flex justify-center text-center"> 
                <h1 className="font-marker">Your Cart is Empty</h1>
                </div>
                <div className="flex justify-center text-center"> 
                <AiOutlineShopping className='text-9xl' />
                </div>
                
            </div>
        )
       } */}
    </div>
    <div>
      /
    </div>
    </>
    
  )
}
