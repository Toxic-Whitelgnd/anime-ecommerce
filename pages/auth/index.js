import React,{useState,useEffect} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Head from "next/head"
import Button from 'react-bootstrap/Button';


import {useRouter} from "next/router"

import app from "../../firebase/firebaseconfig";
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";
import toast from 'react-hot-toast';


export default function Authentication_Page() {
  const [email,setEmail] = useState('');
  const [password,setpassword] = useState('');

  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();
  const router = useRouter();

  console.log(email);
  console.log(password);

  const signup = () =>{
    console.log('signup');
    createUserWithEmailAndPassword(auth,email,password)
    .then((res) =>{
        router.push('/');
        sessionStorage.setItem('Token',res.user.accessToken);
        toast.success("created successfully")
        console.log(res.user);
    }).catch( err => {
      toast.error("User Already Registered");
    });;
  }

  const siginwithemailandpass = ()=>{
      signInWithEmailAndPassword(auth,email,password)
      .then((res) =>{
        router.push('/');
        sessionStorage.setItem('Token',res.user.accessToken);
        toast.success("Signed in successfully")
        console.log(res.user);
      }).catch( err => {
        toast.error("User not signed in");
      });
    }
    


  const signupwithgoogle = () =>{
      signInWithPopup(auth,googleprovider)
      .then((res) => {
        router.push('/');
        sessionStorage.setItem('Token',res.user.accessToken);
        console.log(res.user);
      })
  }

  useEffect(()=>{
    let token = sessionStorage.getItem('Token')

    if(token){
      router.push('/')
    }
  },[])

  return (
    <>
    <Head>
        <title>Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="mt-24"></div>
    <div className="text-center bg-red-300">
    <Tabs
      defaultActiveKey="login"
      id="uncontrolled-tab-example"
      className="lsauth mb-3  justify-center bg-red-300"
    >
      <Tab eventKey="login" title="Login" className='bg-red-300'>
      <h1 className='bg-red-300 font-marker mb-4'>Login Page</h1>
        <div className='bg-red-300 mb-4'>
       
  
        <div className='sm:w-40 sm:ml-10 md:w-2/5 md:ml-80 border-emerald-700 border-2 p-2'>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" placeholder="Enter email" value={email} name="email" size={30} className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={(e) =>  setEmail(e.target.value)}/>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" value={password} name="password" size={30} className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
        <Button variant="primary" type="submit" className="mt-4" onClick={ siginwithemailandpass}>
                Login
            </Button>
          <h5>OR</h5>
            <Button variant="primary" type="submit" onClick={signupwithgoogle}>
                Login with google
            </Button>
        </div>
        </div>
        

        

      </Tab>
      <Tab eventKey="signup" title="Signup" className='bg-red-300'>
        <h1 className='font-marker mb-4 bg-red-300'>Signup Page</h1>
        <div className='bg-red-300 mb-4'>
        <div className='sm:w-40 sm:ml-10 md:w-2/5 md:ml-80 border-emerald-700 border-2 p-2'>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" placeholder="Enter email" value={email} name="email" size={30} className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) =>  setEmail(e.target.value)}/>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" value={password} className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" size={30} name="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
        <Button variant="primary" type="submit" className="mt-4" onClick={signup}>
                Signup
            </Button>
          <h5>OR</h5>
            <Button variant="primary" type="submit" onClick={signupwithgoogle}>
                Signup with google
            </Button>
        </div>
      </div>
      </Tab>

    </Tabs>
    </div>
    </>
  )
}



