import React from 'react'
import DefaultLayout from '../../Layout/Layout'
import { useStateContext } from '../../context/StateConTexT';
import { urlFor } from '../../lib/client';
import Button from 'react-bootstrap/Button';
import FavCards from '../../components/Cards/FavCards';

export default function Favourites_item() {

    const {onRemove,Favitem,onADDFavitem,favqty} = useStateContext();

  return (
    <div>
        <>
        <div className='mt-24'></div>
            <div>
            <h1>Favourite Items (<span className='text-red-500'>{favqty}</span> Items)</h1>
                {
                    Favitem.length < 1 && (
                        <>
                        <div className="flex justify-center mt-10">
                            <h1>Your Favourites item List is Empty</h1>
                        </div>
                        <div className='mt-4 flex justify-center'>
                            <Button variant="light" href='/'>Continue Shopping</Button>
                        </div>
                        </>
                    )
                }
            </div>
            
                <div className="bg-[#eb8a8a] flex flex-wrap justify-center m-3 ">
                {
                    Favitem.length >= 1 && Favitem.map((item)=>(
                        <>
                        <div className="flex flex-wrap">
                            <FavCards 
                            name={item.name}
                            pimage={item.image}
                            brand={item.brand}
                            price={item.price}
                            slug={item.slug.current}
                            key ={item._id }
                            product={item}
                            />
                        </div>
                        </>
                    )) 
                }
            </div>
        </>
    </div>
  )
}
