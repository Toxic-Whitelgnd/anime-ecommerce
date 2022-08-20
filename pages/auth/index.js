// import React,{useState,useEffect} from 'react'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import Head from "next/head"
// import Button from 'react-bootstrap/Button';


// import {useRouter} from "next/router"

// import app from "../../firebase/firebaseconfig";
// import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";
// import toast from 'react-hot-toast';


// export default function Authentication_Page() {
//   const [email,setEmail] = useState('');
//   const [password,setpassword] = useState('');

//   const auth = getAuth();
//   const googleprovider = new GoogleAuthProvider();
//   const router = useRouter();

//   console.log(email);
//   console.log(password);

//   const signup = () =>{
//     console.log('signup');
//     createUserWithEmailAndPassword(auth,email,password)
//     .then((res) =>{
//         router.push('/');
//         sessionStorage.setItem('Token',res.user.accessToken);
//         toast.success("created successfully")
//         console.log(res.user);
//     });
//   }

//   const siginwithemailandpass = ()=>{
//     signInWithEmailAndPassword(auth,email,password)
//     .then((res) =>{
//       router.push('/');
//       sessionStorage.setItem('Token',res.user.accessToken);
//       toast.success("Signed in successfully")
//       console.log(res.user);
//     });
//   }

//   const signupwithgoogle = () =>{
//       signInWithPopup(auth,googleprovider)
//       .then((res) => {
//         router.push('/');
//         sessionStorage.setItem('Token',res.user.accessToken);
//         console.log(res.user);
//       })
//   }

//   useEffect(()=>{
//     let token = sessionStorage.getItem('Token')

//     if(token){
//       router.push('/')
//     }
//   },[])

//   return (
//     <>
//     <Head>
//         <title>Authentication</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//     <div className="mt-24"></div>
//     <div className="text-center">
//     <Tabs
//       defaultActiveKey="login"
//       id="uncontrolled-tab-example"
//       className="mb-3  justify-center"
//     >
//       <Tab eventKey="login" title="Login">
//       <h1 className='font-marker mb-4'>Login Page</h1>
//         <div className='bg-[#96ed82] mb-4'>
       

//         <div className='sm:w-40 sm:ml-10 md:w-2/5 md:ml-80 border-emerald-700 border-2 p-2'>
//         <input type="email" placeholder="Enter email" value={email} name="email" size={30} className=' mt-2 ml-20 block' onChange={(e) =>  setEmail(e.target.value)}/>
//         <input type="password" value={password} name="password" size={30} className=' mt-4 ml-20 block' placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
//         <Button variant="primary" type="submit" className="mt-4" onClick={ siginwithemailandpass}>
//                 Signin
//             </Button>
//           <h5>OR</h5>
//             <Button variant="primary" type="submit" onClick={signupwithgoogle}>
//                 Signin with google
//             </Button>
//         </div>
//         </div>

        

//       </Tab>
//       <Tab eventKey="signup" title="Signup">
//         <h1 className='font-marker mb-4'>Signup Page</h1>
//         <div className='bg-[#96ed82] mb-4'>
//         <div className='sm:w-40 sm:ml-10 md:w-2/5 md:ml-80 border-emerald-700 border-2 p-2'>
//         <input type="email" placeholder="Enter email" value={email} name="email" size={30} className=' mr-4 mt-2 ml-20 block' onChange={(e) =>  setEmail(e.target.value)}/>
//         <input type="password" value={password} className=' mt-4 ml-20 block' size={30} name="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
//         <Button variant="primary" type="submit" className="mt-4" onClick={signup}>
//                 Signup
//             </Button>
//           <h5>OR</h5>
//             <Button variant="primary" type="submit" onClick={signupwithgoogle}>
//                 Signup with google
//             </Button>
//         </div>
//       </div>
//       </Tab>

//     </Tabs>
//     </div>
//     </>
//   )
// }



