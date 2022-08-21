import React, { useState,useEffect } from 'react'
import DefaultLayout from '../../Layout/Layout'
import {Client} from "../../lib/client"
import HovCards from "../../components/Cards/HovCards"
import Head from 'next/head'
import { Button } from 'react-bootstrap';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {db,app} from "../../firebase/firebaseconfig"

const auth = getAuth(app);
    const cuser = auth.currentUser;


    if (cuser === null){
       console.log("no current user");
       
    }

export default function Tshirts({tshirts}) {
  const [Searchterm, setSearchterm] = useState('');

  const [user1,setuser] = useState(null);

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setuser(user);
            } else {
              // User is signed out
              // ...
            }
          });
        
    });
    if(user1 === null){
        console.log("no user1 found");
    }
    else{
        // console.log(user1.uid)
    }

  return (
    <>
      <Head>
        <title>Tshirts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mt-24'></div>
      {/* <div className='flex flex-row justify-around'>
          <h2>Hello Mr {cuser === null ? 'Guest' : cuser.displayName }</h2>
          <div className='flex justify-end '>
          {cuser === null ? <Button onClick={()=>{
                    router.push(`/auth`)
                }}  variant="dark" className='flex place-content-end' >Login</Button> : 
                <Button onClick={()=>{
               signoutuser() }}  variant="dark" className='flex place-content-end' >Logout</Button>}
          
          </div>
          <div>   
      

          </div>
        </div> */}
    <div className='m-2'>
        <h1 className='font-silkscreen'>Browse our Tshirts 👕</h1>
        <h6 className='text-red-500 font-lobster'>Still more Brands are on the way 😍</h6>
    </div>
     {/* <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]"> */}
     <div className="bg-[#eb8a8a]">
        <div class="flex justify-center">
          <div class="mb-3  mt-4 xl:w-96">
            <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search by..name..brand" aria-label="Search" aria-describedby="button-addon2" onChange={e => {
                    setSearchterm(e.target.value);
                }} />
              <button class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
     <div className="bg-[#eb8a8a] flex justify-center flex-wrap m-3 ">
    {
        tshirts.filter((result)=>{
          if (Searchterm == ""){
            return result
          }
          else if(result.name.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
            return result
          }
          else if(result.brand.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
            return result
          }
          
        }).map(tshirt => (
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