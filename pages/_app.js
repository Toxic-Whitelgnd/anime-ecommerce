import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import 'bootstrap/dist/css/bootstrap.css'  //normal bootstrap
import {StateConTexT} from "../context/StateConTexT"
import {Toaster} from 'react-hot-toast'
import DefaultLayout from '../Layout/Layout';
import "../src/config/firebase.config";
import {AuthProvider} from "../src/hooks/auth"

function MyApp({ Component, pageProps }) {
  return (

  <StateConTexT>
    <AuthProvider>
   <DefaultLayout>
    <Toaster />
  <Component {...pageProps} />
  </DefaultLayout>
  </AuthProvider>
  </StateConTexT>

  )
}

export default MyApp
