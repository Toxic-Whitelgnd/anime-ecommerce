import React from 'react'
import DefaultLayout from '../../Layout/Layout'
import {Client} from "../../lib/client"
import HovCards from "../../components/Cards/HovCards"



export default function Jackets({jackets}) {
  return (
    <DefaultLayout>
        <div>
            <h1 >Browse our Jackets 🧥</h1>
            <h6 className='text-red-500'>Still more Products are on the way 😍</h6>
        </div>
        <>
        <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]">
        {
            jackets.map(jacket =>(
                <HovCards 
                name={jacket.name}
                brand={jacket.brand}
                price={jacket.price}
                pimage={jacket.image}
                slug={jacket.slug.current}
                product={jacket}
                />
            )
            )
        }
        </div>
        </>

    </DefaultLayout>
    
  )
}

export async function getServerSideProps() {
    const jquery = '*[_type == "jacket"]';
    const jackets = await Client.fetch(jquery);
  
    // const pquery = '*[_type == "products"]';
    // const products = await Client.fetch(pquery);
  
    // console.log(banner);
    // console.log(products);
    console.log(jackets)
  
    return{
      props: {
       jackets
      }
    }
  
  }