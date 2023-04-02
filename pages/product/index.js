import React from 'react';
import SuggestionCard from '../../components/Cards/SuggestionCard';
import { Client } from '../../lib/client';

// note it is not being used 

export default function SuggestionPdt({products1}){

    return (
        <div className='sugg'>
            <div> 
                <h1>You may also like</h1>
            </div>
            <div className='best-product'>
               {
                products1?.map((p) => (
                    <SuggestionCard
                    price={p.price}
                    newprice={p.newprice}
                    name={p.name}
                    pimage={p.image}
                    slug={p.slug.current}
                    />
                ))
               }

               
            </div>

        </div>
    );
}

export async function getServerSideProps() {
  
    const pquery = '*[_type == "products"]';
    const products1 = await Client.fetch(pquery);
    console.log("came to shit not working whyyy");
  
    return{
      props: {
        products1,
      }
    }
  }


