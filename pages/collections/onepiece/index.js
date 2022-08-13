import React from 'react'
import HovCards from '../../../components/Cards/HovCards'
import DefaultLayout from '../../../Layout/Layout'
import { Client } from '../../../lib/client'

export default function OnePiece({onepiece}) {
  return (
    <DefaultLayout>
    <div>
      <h1>Explore the OnePiece Collections</h1>
    </div>
    <>
    <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]">
      {
          onepiece.map(ds =>(
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
const dquery = '*[_type == "onepiece"]';
const onepiece = await Client.fetch(dquery);



return{
props: {
 onepiece
}
}

}
