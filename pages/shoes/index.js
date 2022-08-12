import React from 'react'
import DefaultLayout from '../../Layout/Layout'
import {Client} from "../../lib/client"
import HovCards from "../../components/Cards/HovCards"



export default function Shoes({shoes}) {
  return (
    <>
    <DefaultLayout>
    <div>
        <h1>Browse our Anime Shoes 👟</h1>
    </div>
    <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]">
        {
            shoes.map( shoe =>(
                <HovCards 
                name={shoe.name}
                pimage={shoe.image}
                price={shoe.price}
                brand={shoe.brand}
                slug={shoe.slug.current}
                />
            ))
        }

    </div>
    </DefaultLayout>
    </>
  )
}
export async function getServerSideProps() {
    // const jquery = '*[_type == "jacket"]';
    // const jackets = await Client.fetch(jquery);
  
    const squery = '*[_type == "shoe"]';
    const shoes = await Client.fetch(squery);
  
    return{
      props: {
       shoes
      }
    }
  
  }