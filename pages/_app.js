import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import 'bootstrap/dist/css/bootstrap.css'  //normal bootstrap
import {StateConTexT} from "../context/StateConTexT"
import {Toaster} from 'react-hot-toast'
import DefaultLayout from '../Layout/Layout';


import NextNProgress from "nextjs-progressbar";


import {useRouter} from "next/router";
import {useState,useEffect} from "react";

import Spinner from 'react-bootstrap/Spinner';

function Loading(){
  const router = useRouter();
  const [loading,setloading] = useState(false);
  useEffect(()=>{
    const handleStart = (url) => (url !== router.asPath) && setloading(true);
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => {setloading(false),5000});

    router.events.on('routerChnageStart', handleStart);
    router.events.on('routerChnageCompletet', handleComplete);
    router.events.on('routerChnageError', handleComplete);

    return() => {
    router.events.off('routerChnageStart', handleStart);
    router.events.off('routerChnageCompletet', handleComplete);
    router.events.off('routerChnageError', handleComplete);
    }

  })
  return loading && (
    <>
    <div className="flex justify-center align-middle center">
    <Spinner animation="grow" variant="dark" />
    </div>
    </>
  )
}


function MyApp({ Component, pageProps }) {
  return (

  <StateConTexT>
    
 
    <DefaultLayout>
      <Toaster />
        <NextNProgress
          color="#ff0f0f"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow={true}
        />
          <Component {...pageProps} />

    </DefaultLayout>
  </StateConTexT>

  )
}

export default MyApp
