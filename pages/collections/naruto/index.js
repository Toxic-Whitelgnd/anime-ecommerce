import React from 'react'
import HovCards from '../../../components/Cards/HovCards'
import DefaultLayout from '../../../Layout/Layout'
import { Client } from '../../../lib/client'
import Head from 'next/head'

export default function Naruto({naruto}) {
  return (
     <DefaultLayout>
      <Head>
        <title>Naruto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      <h1>Explore the Naruto Collections</h1>
    </div>
    <>
    <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]">
      {
          naruto.map(ds =>(
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

</DefaultLayout>
)
}

export async function getServerSideProps() {
const dquery = '*[_type == "naruto"]';
const naruto = await Client.fetch(dquery);



return{
props: {
 naruto
}
}

}