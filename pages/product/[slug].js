import React, { useState,useEffect } from 'react'
import {Client,urlFor} from '../../lib/client'
import {RiStarSmileFill} from "react-icons/ri" 
import {useStateContext} from "../../context/StateConTexT";
import Head from 'next/head'
import {useRouter } from "next/router";
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import { collection, getDocs,addDoc } from "firebase/firestore";
import {db,app} from "../../firebase/firebaseconfig"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SizeCard from '../../components/Cards/SizeCard';

const ProductDetails = ({product}) => {
    
    const {name,details,type,image,ratings,brand,price} = product;
    const [size,setSize] = useState('S');
    const {decqty,incqty,qty,onADDtocart,onNewSize} = useStateContext();
    const router = useRouter();

    const [data,setdata]= useState([]);

    const auth = getAuth(app);

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
        // console.log("from hovcards"+user1.uid)
    }

   
    const pushdata = async () =>{
      const db1Ref = collection(db,user1.email);
        try {
            addDoc(db1Ref,product)
            console.log("sened successfully",db1Ref.id);
        }
        catch (e){
            console.error("Error adding document: ", e);
        }
    }

  return (
    
    <>
    <>
    <Head>
        <title>Product Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mt-24'></div>
    <div>
        <h2 className='font-silkscreen'>Product Details</h2>
    </div>
    <div>
    <div className="bg-[#ddebed] p-2">
           <div className="md:container mt-2 ">
            <h3 className="capitalize font-glitch">{name}</h3>
           </div>
           <div className="md:flex sm:block">
            <img  src={urlFor(image)} alt="dog-pics" width={660} height={500} />
            <div className="sm:flex flex-wrap">
            <div className="md:block ml-7  ">
                <h5 className="text-3xl capitalize font-wetpaint">{type}</h5>
                <h5 className="text-3xl capitalize font-marker">{brand}</h5>
                <p className="text-2xl  capitalize font-dancing">{details}</p>
                <div className="flex text-xl flex-wrap ">
                <h6 > <RiStarSmileFill className='flex text-xl m-2 font-rajdhani' /> Ratings: {ratings} / 10  </h6>
                </div>
                <h4 className="mt-2 mb-3 font-kanit">Price:₹ {price}</h4>
                <div>
                <div className="flex">
                <SizeCard 
                  type={'Tsize'}
                  product={product}
                />
                
                </div>
               
                <h5 className="mb-2 font-kanit">Quantity</h5>
                    <button type="button" onClick={()=>{
                      console.log("pressed on plus");  
                      decqty();
                    }} className="btn btn-danger mr-4">-</button>
                    <span className="text-xl   border-2 pt-1 pb-1 pr-2 pl-2">
                      {qty}
                    </span>
                    <button type="button"onClick={()=>{
                      console.log("pressed on minus"); 
                      incqty() ;
                    }} className="btn btn-success ml-4">+</button>
                </div>
                <div className="mt-4">
                    <button type="button" onClick={()=>{
                      console.log("pressed on addtocart");
                      console.log(size); 
                      onADDtocart(product,qty,size); 
                      pushdata();
                    }} className="btn btn-warning mr-4 font-kanit"><span className="font-rajdhani">Add-to-cart</span></button>
                    <button type="button" onClick={()=>{
                      console.log("pressed on buynow");  
                      console.log(size); 
                      onADDtocart(product,qty,size);
                      pushdata();
                       console.log(product);
                      router.push('/carts')
                    }} className="btn btn-info font-kanit"><span className="font-rajdhani">Buy-Now</span></button>
                </div>
            </div>
            </div>
           </div>
        </div>

    </div>
    </>
    
    </>
  )
}

export const getStaticPaths = async()=>{
    const pquery = `*[_type == "products"]{
        slug {
            current
        }
    }`;

    const products = await Client.fetch(pquery);

    const paths = products.map((product)=>({
        params:{
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback:'blocking'
    }
    
}

export async function getStaticProps ({params:{slug}}) {

  
    const pquery = `*[_type in ["products","banner","shoe","jacket","tshirt","onepiece","naruto","aot","deomonslayer"] && slug.current == '${slug}'][0]`;
    const product = await Client.fetch(pquery);
  
    return{
      props: {
        
        product
      }
    }
  
  }
  

  export default ProductDetails