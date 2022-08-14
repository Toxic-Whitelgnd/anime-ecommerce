import React from 'react'
import DefaultLayout from '../../Layout/Layout'
import {Client} from "../../lib/client"
import HovCards from "../../components/Cards/HovCards"
import Head from 'next/head'


export default function Tshirts({tshirts}) {
  return (
    <>
      <Head>
        <title>Tshirts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='m-2'>
        <h1>Browse our Tshirts 👕</h1>
        <h6 className='text-red-500'>Still more Brands are on the way 😍</h6>
    </div>
     {/* <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]"> */}
     <div className="bg-[#eb8a8a] flex justify-center flex-wrap m-3 ">
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
    
    </>
    
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