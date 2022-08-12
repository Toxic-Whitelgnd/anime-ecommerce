import React from 'react'
import HovCards from '../../../components/Cards/HovCards'
import DefaultLayout from '../../../Layout/Layout'
import { Client } from '../../../lib/client'

export default function AOT({aot}) {
  return (
    <DefaultLayout>
    <div>
      <h1>Explore the AOT Collections</h1>
    </div>
    <>
    <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]">
      {
          aot.map(ds =>(
            <HovCards
              name={ds.name}
              brand={ds.brand}
              price={ds.price}
              pimage={ds.image}
              slug={ds.slug.current}
            />

          
            ) )
      }
    
    </div>
    </>

</DefaultLayout>
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
