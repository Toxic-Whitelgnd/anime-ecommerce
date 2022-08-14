import React from 'react'
import HovCards from '../../../components/Cards/HovCards'
import DefaultLayout from '../../../Layout/Layout'
import { Client } from '../../../lib/client'
import Head from 'next/head'

export default function AOT({aot}) {
  return (
    <>
      <Head>
        <title>AOT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      <h1>Explore the AOT Collections</h1>
    </div>
    <>
     {/* <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]"> */}
     <div className="bg-[#eb8a8a] flex justify-center flex-wrap m-3 ">
      {
          aot.map(ds =>(
            <HovCards
              name={ds.name}
              brand={ds.brand}
              price={ds.price}
              pimage={ds.image}
              slug={ds.slug.current}
              product={ds}
            />

          
            ) )
      }
    
    </div>
    </>

</>
)
}

export async function getServerSideProps() {
const dquery = '*[_type == "aot"]';
const aot = await Client.fetch(dquery);



return{
props: {
 aot
}
}

}
