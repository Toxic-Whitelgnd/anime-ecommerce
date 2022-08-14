import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import 'bootstrap/dist/css/bootstrap.css'  //normal bootstrap
import {StateConTexT} from "../context/StateConTexT"
import {Toaster} from 'react-hot-toast'
import DefaultLayout from '../Layout/Layout';


function MyApp({ Component, pageProps }) {
  return (

  <StateConTexT>
   <DefaultLayout>
    <Toaster />
  <Component {...pageProps} />
  </DefaultLayout>
  </StateConTexT>

  )
}

export default MyApp
