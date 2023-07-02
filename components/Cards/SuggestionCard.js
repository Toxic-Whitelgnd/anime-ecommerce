import React from 'react';
import { urlFor } from '../../lib/client';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Router, {useRouter} from "next/router"

const SuggestionCard = ({newprice,price,name,pimage,slug}) => {

    const ifnewprice = (price,newprice)=>{
        return(
            <>
                <del>{price}</del> new OffPrice ₹<span className='text-red-800'>{newprice}</span>
            </>
        )
    }

    return (
        <div>
            {/* <Link href={
                            router.push(`/product/${slug}`)
                        }> */}
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="p-8 rounded-t-lg" src={urlFor(pimage)} alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold text-capitalize tracking-tight text-gray-900 ">{name?name:"Product name"}</h5>
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-gray-900  mr-3">₹{newprice?ifnewprice(price,newprice):price}</span> 
                        {/*  */}
                        <Button onClick={()=>{
                            Router.push(`/product/${slug}`)
                        }}  variant="dark">View</Button>
                        
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div>
    );
}

export default SuggestionCard;
