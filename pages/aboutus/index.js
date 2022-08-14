import React from 'react'
import Head from 'next/head'
import img1 from "../../images/aka.jpg"
import img2 from "../../images/owner/xyz.png"
import Image from "next/image"



export default function AboutUs() {
  return (
    <>
    <Head>
      <title>AboutUs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='mt-24'></div>
    <div>
      <div>
        <h1>About AkaStores</h1>
      </div>
      <div className='md:flex m-3'>
        <Image src={img1} alt="aka-stores" width={700} height={500} />
        <div className='md:block m-5'>
          <p className='italic'>Nothing to tell more about the store, a store that is opened for the anime fans who can buy their favourite
            anime character's Tshirt , Jackets , Hoddies and Shoes... Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
            A Sorry request for the customers that Still more products are in production and it will be Updated in 2 weeks!
          </p>

        </div>
      </div>
      <div>
        <h1>About owner</h1>
      </div>
      <div className='md:flex m-7'>
        <Image src={img2} alt="aka-stores" width={400} height={800} />
        <div className='md:block m-5'>
          <p className='italic'>Nothing to tell more about me . Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
            Want to learn more about me!
          </p>
          <button type="button" className="btn btn-primary mr-3 ml-2" onClick={()=> window.open('https://toxic-whitelgnd.github.io/Portfolio/')}>
              Learn More
            </button>
        </div>
      </div>
    </div>
    </>
  )
}
