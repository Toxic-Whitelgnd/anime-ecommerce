import React from 'react'
import DefaultLayout from '../../Layout/Layout'
import {Client} from "../../lib/client"
import HovCards from "../../components/Cards/HovCards"
import Head from 'next/head'


export default function Shoes({shoes}) {
  return (
    <>
    <>
    <Head>
        <title>Shoes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='m-2'>
        <h1>Browse our Anime Shoes 👟</h1>
        <h6 className='text-red-500'>Still more Collections are on the way 😍</h6>
    </div>
     {/* <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]"> */}
     <div className="bg-[#eb8a8a] flex flex-wrap m-3 justify-center">
        {
            shoes.map( shoe =>(
                <HovCards 
                name={shoe.name}
                pimage={shoe.image}
                price={shoe.price}
                brand={shoe.brand}
                slug={shoe.slug.current}
                product={shoe}
                />
            ))
        }

    </div>
    </>
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