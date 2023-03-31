import React from 'react';

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
            
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    {/* <img class="p-8 rounded-t-lg" src={urlFor(pimage)} alt="product image" /> */}
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name?name:"Product name"}</h5>
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">₹{newprice?ifnewprice(price,newprice):price}</span>
                        {/* <Button onClick={()=>{
                            router.push(`/product/${slug}`)
                        }}  variant="dark">View</Button> */}
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SuggestionCard;
