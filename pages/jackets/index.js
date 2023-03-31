import React, { useState,useEffect } from 'react'
import DefaultLayout from '../../Layout/Layout'
import {Client} from "../../lib/client"
import HovCards from "../../components/Cards/HovCards"
import Head from 'next/head'


export default function Jackets({jackets}) {

  const [Searchterm, setSearchterm] = useState('');
  const [range,setRange] = useState(0);
    // console.log(range);
  

  return (
    <>
      <Head>
        <title>Jackets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='mt-24'>
        <div className='m-2 '>
            <h1 className='font-silkscreen'>Browse our Jackets 🧥</h1>
            <h6 className='text-red-500 font-lobster'>Still more Products are on the way 😍</h6>
        </div>
        <>
        {/* <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]"> */}
        {/* begining of search */}
        <div className="bg-[#]">
        <div class="flex justify-center">
          <div class="mb-3  mt-4 xl:w-96">
            <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search by..name..brand" aria-label="Search"  aria-describedby="button-addon2" onChange={e => {
                    setSearchterm(e.target.value);
                }} />
              <button class="btn inline-block px-6 py-2.5 bg-blue-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* end of search */}
        {/* for range price */}
        {/* <input type="range" id="range"  value={range} max="2000" min="200" onChange={(e)=> setRange(e.target.value)}/>
          <h5>Start Searching from the price above {range}</h5> */}
        {/* end of range */}
        <div className="an-back bg-[#eb8a8a] flex justify-center flex-wrap  ">
           
           
        {
          jackets.filter((result)=>{
            if (Searchterm == ''){
              return result
            }
            else if(result.name.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
              return result
            }
            else if(result.brand.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
              return result
            }
            else if(result.price > 1000){  //in the place of 1000 reeplace with range
              return result
            }
            else if(result.price < 1000){  //in the place of 1000 reeplace with range
              return result
            }
            

           }).map(jacket =>(
                <HovCards 
                name={jacket.name}
                brand={jacket.brand}
                price={jacket.price}
                pimage={jacket.image}
                slug={jacket.slug.current}
                product={jacket}
                newprice={jacket.newprice}
                />
            )
            )
        }
        {/* {
          jackets.filter((result)=>{
            if (result.price > range){
              return result
            }
          }).map(jacket =>(
            <HovCards 
            name={jacket.name}
            brand={jacket.brand}
            price={jacket.price}
            pimage={jacket.image}
            slug={jacket.slug.current}
            product={jacket}
            />
        ))
        } */}
        </div>
        </div>
        </>
        </div>
        </>
    
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