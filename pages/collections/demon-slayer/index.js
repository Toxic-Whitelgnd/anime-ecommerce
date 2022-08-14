import React from 'react'
import HovCards from '../../../components/Cards/HovCards'
import DefaultLayout from '../../../Layout/Layout'
import { Client } from '../../../lib/client'

export default function DemonSlayer({demonslayers}) {
  return (
    <>
      <Head>
        <title>Demon Slayer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
          <h1>Explore the Demon-Slayer Collections</h1>
        </div>
        <>
         {/* <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]"> */}
     <div className="bg-[#eb8a8a] flex justify-center flex-wrap m-3 ">
          {
              demonslayers.map(ds =>(
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
  const dquery = '*[_type == "deomonslayer"]';
  const demonslayers = await Client.fetch(dquery);



  return{
    props: {
     demonslayers
    }
  }

}
