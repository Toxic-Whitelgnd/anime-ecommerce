import React from 'react'
import {useRouter} from "next/router"
import { urlFor } from '../../lib/client';
import { Button } from 'bootstrap';

export default function CollectionCard({name,pimage,products,paths}) {
    const router = useRouter();
  return (
    <div>
 
    
      <div className="bg-[#5DBE9B]  h-40 m-4 w-2/5 border-2   border-stone-500 rounded-xl">
         <h3 className="m-2">{name} Collections</h3>
         <div className='float-right realtive -mt-32 -mr-36' >
          <img src={urlFor(pimage)} alt="Demon Slayer" width={250} height={250} />
         </div>
         <h6 className="m-2">{products}</h6>
         <div className='mt-2'>
          <Button onClick={()=>{
            router.push(`/collections/${paths}`)
          }} className="m-6" variant="secondary">Explore</Button>
         </div>
      </div>
      
      </div>

  )
}
