import React from 'react'
import DefaultLayout from '../../Layout/Layout'
import {Client, urlFor} from "../../lib/client"
import HovCards from "../../components/Cards/HovCards"
import { Button } from 'react-bootstrap'
import {useRouter} from "next/router"
import Head from 'next/head'

export default function Anime_Colletion({collec}) {
    const router = useRouter();
  return (
    <>
      <Head>
        <title>Collections</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mt-24'></div>
        <div>
            <h1 className='z-auto'>Browse your Favourite Anime Collection</h1>
        </div>
        <>
        {/* <div className="grid col-start-1 col-end-2 grid-cols-2  justify-evenly m-10 bg-[#eb8a8a]"> */}
        <div className="bg-[#eb8a8a] flex flex-wrap gap-x-16 gap-y-20 m-3 mt-4  ">
        {
            collec.map(c =>(
                <>
                {/* <div className="flex justify-center text-center"> */}
                <div className="bg-[#5DBE9B] sm:w-96 h-42  md:h-40 m-6 w-80 border-2   border-stone-500 rounded-xl ">
                    <h3 className="m-2"><span className='text-red-700'>{c.name}</span> Collections</h3>
                    <div className='float-right realtive -mt-32 -mr-36' >
                    <img src={urlFor(c.image)} alt="colletion-images"  width={250} height={250} />
                    </div>
                    <h6 className="m-2 flex-wrap-reverse">{c.products}</h6>
                    
                    <Button onClick={()=>{
                        router.push(`/collections/${c.slug.current}`)
                    }} className="mt-2 ml-4" variant="secondary">Explore</Button>
                   
                </div>
                {/* </div> */}
                </>
            ))
        }
        </div>
        </>

    </>
    
  )
}

export async function getServerSideProps() {
    const jquery = '*[_type == "collections"]';
    const collec = await Client.fetch(jquery);
  
    return{
      props: {
       collec
      }
    }
  
  }