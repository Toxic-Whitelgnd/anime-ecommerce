import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {StateConTexT} from "../context/StateConTexT"
import {Toaster} from 'react-hot-toast'
import DefaultLayout from '../Layout/Layout';


function MyApp({ Component, pageProps }) {
  return (

  <StateConTexT>
   
    <Toaster />
  <Component {...pageProps} />
    
  </StateConTexT>

  )
}

export default MyApp
