
import Head from 'next/head'
import Banner_Product from '../components/Banner/Banner';
import {Client} from '../lib/client';
import HovCards from '../components/Cards/HovCards';
import { Button } from 'react-bootstrap';
import react,{useEffect,useState} from 'react';

import {useRouter} from "next/router";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebaseconfig"


import {useAuthStateContext} from "../context/AuthStatechnged"



export default function  Home ({banner,products,breadcrumb})
 {
  const router = useRouter();
  const auth = getAuth(app);
  const cuser = auth.currentUser;

  const[user,setuser] = useState(null);


  if (cuser === null){
    console.log("no current user");
  }
  else{
    const dname = cuser.displayName;
  }


  const  signoutuser = async () => {
    console.log("signoutuser");
    sessionStorage.removeItem("Token");
    auth.signOut();
    localStorage.clear();
    window.location.reload();
  }

  useEffect(()=>{
    let token = sessionStorage.getItem('Token')

    if(token){
      router.push('/')
    }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;

        setuser(user)
        console.log("from eff"+uid);

      } else {
       
      }
    });
  },[])

  
  return (
    <div>
     
      <Head>
        <title>Aka Stores</title>
        <link rel="icon" href="/akas.ico" />
      </Head>

      
      <>
      <div className="mt-24">
        <div className='flex flex-row justify-around'>
          <h2>Hello {cuser === null ? 'Guest' :cuser.displayName} 👋🏻 </h2>
          <div className='flex justify-end '>
          {cuser === null ? <Button onClick={()=>{
                    router.push(`/newauth`)
                }}  variant="dark" className='flex place-content-end' >Login</Button> : 
                <Button onClick={()=>{
               signoutuser() }}  variant="dark" className='flex place-content-end' >Logout</Button>}
          
          </div>
          <div>   
      

          </div>
        </div>
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
            <h3 className='font-silkscreen'>Browse Our top Selling Products  </h3>
            {/* {user.displayName} */}
        </div> 
        <div className='flex ml-2 flex-row flex-wrap m-3'>
          {
            breadcrumb.map( b => (
              <>
              
                <div className='bg-cyan-500 pl-3 pr-3 pt-2 mr-2 mt-3  w-auto h-10 rounded-3xl'>
                      <a onClick={()=> router.push(`/${b.path.current}`)} className='text-center no-underline text-red-600 font-medium text-lg hover:text-red-500 hover:cursor-default'>{b.productcategory}</a>
                </div>
              
              </>
            ))
          }
        </div>  
        {/* <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#eb8a8a]"> */}
        <div className="an-back bg-[#eb8a8a] flex justify-center flex-wrap  ">
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

  const breadquery = '*[_type == "breadcrumb"]';
  const breadcrumb = await Client.fetch(breadquery);

  return{
    props: {
      banner,
      products,
      breadcrumb
    }
  }

}


