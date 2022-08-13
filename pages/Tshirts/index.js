import React from 'react'
import DefaultLayout from '../../Layout/Layout'
import {Client} from "../../lib/client"
import HovCards from "../../components/Cards/HovCards"
import Head from 'next/head'


export default function Tshirts({tshirts}) {
  return (
    <DefaultLayout>
      <Head>
        <title>Tshirts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
        <h1>Browse our Tshirts 👕</h1>
    </div>
    <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]">
    {
        tshirts.map(tshirt => (
            <HovCards
            name={tshirt.name} 
            pimage={tshirt.image}
            price={tshirt.price}
            brand={tshirt.brand}
            slug={tshirt.slug.current}
            product={tshirt}
            />
        ))
    }

    </div>
    
    </DefaultLayout>
    
  )
}
export async function getServerSideProps() {
    const tquery = '*[_type == "tshirt"]';
    const tshirts = await Client.fetch(tquery);
  
    // console.log(jackets)
  
    return{
      props: {
       tshirts
      }
    }
  
  }