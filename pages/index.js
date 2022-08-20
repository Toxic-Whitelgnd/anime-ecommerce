
import Head from 'next/head'
import Banner_Product from '../components/Banner/Banner';
import {Client} from '../lib/client';
import HovCards from '../components/Cards/HovCards';
import { Button } from 'react-bootstrap';
import react,{useEffect,useState} from 'react';

import {useRouter} from "next/router";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebaseconfig"


import Offcanvas from 'react-bootstrap/Offcanvas';
import {FaRegUserCircle} from "react-icons/fa"


export default function  Home ({banner,products})
 {
  const router = useRouter();
  const [user, setUser] = useState([]);
  // const auth = getAuth(app);
  // const cuser = auth.currentUser;


  // if (cuser === null){
  //   console.log("no current user");
  // }


  const  signoutuser = async () => {
    console.log("signoutuser");
  }

  useEffect(()=>{
    let token = sessionStorage.getItem('Token')

    if(token){
      router.push('/')
    }
  },[])
  return (
    <div>
     
      <Head>
        <title>Aka Stores</title>
        <link rel="icon" href="/akas.ico" />
      </Head>

      
      <>
      <div className="mt-24">
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
        {
          banner.map(banner => (
          
          <Banner_Product 
            name={banner.name}
            sale={banner.sale}
            captions={banner.captions}
            oldprice={banner.oldprice}
            newprice={banner.newprice}
            image1={banner.image[0]}
            image2={banner.image[1]}
            slug={banner.slug.current}
            
            />))
          

        }
        </div>
        <div>
            <h3 className='font-silkscreen'>Browse Our top Selling Products </h3>
            {/* {user.displayName} */}
        </div> 
        {/* <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]"> */}
        <div className="bg-[#eb8a8a] flex justify-center flex-wrap  m-3 ">
        {
          
          products.map(product => (
            
           <HovCards
            name={product.name}
            pimage={product.image}
            brand={product.brand}
            price={product.price}
            slug={product.slug.current}
            product={product}
            key = {product._id}
            />
            
            ))

        }
        </div>
        
        
      </>
      

    </div>
  )
}


export async function getServerSideProps() {
  const bquery = '*[_type == "banner"]';
  const banner = await Client.fetch(bquery);

  const pquery = '*[_type == "products"]';
  const products = await Client.fetch(pquery);

  return{
    props: {
      banner,
      products
    }
  }

}


