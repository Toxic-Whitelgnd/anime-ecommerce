
import Head from 'next/head'
import Image from 'next/image'
import DefaultLayout from "../Layout/Layout"
import Banner_Product from '../components/Banner/Banner';
import {Client} from '../lib/client';
import HovCards from '../components/Cards/HovCards';
// import {SSRProvider} from 'react-aria';

export default function  Home ({banner,products})
 {
  return (
    <div>
      {/* <SSRProvider> */}
      <Head>
        <title>Aka Stores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        {
          banner.map(banner => (
          
          <Banner_Product 
            name={banner.name}
            sale={banner.sale}
            captions={banner.captions}
            oldprice={banner.oldprice}
            newprice={banner.newprice}
            image={banner.image}
            slug={banner.slug}
            
            />))
          

        }
        <div>
            <h3>Browse your Products</h3>
        </div> 
        <div className="grid col-start-1 col-end-2 grid-cols-3 justify-evenly m-10 bg-[#ddebed]">
        {
          
          products.map(product => (
            
           <HovCards
            name={product.name}
            pimage={product.image}
            brand={product.brand}
            price={product.price}
            />
            
            ))

        }
        </div>
        
        
      </DefaultLayout>
      
    
    {/* </SSRProvider> */}
    </div>
  )
}


export async function getServerSideProps() {
  const bquery = '*[_type == "banner"]';
  const banner = await Client.fetch(bquery);

  const pquery = '*[_type == "products"]';
  const products = await Client.fetch(pquery);

  console.log(banner);
  // console.log(products);

  return{
    props: {
      banner,
      products
    }
  }

}


