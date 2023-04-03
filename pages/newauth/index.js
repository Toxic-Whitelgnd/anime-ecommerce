import React,{useState,useEffect} from 'react'

import {useRouter} from "next/router"
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";
import toast from 'react-hot-toast';
import { Button } from 'react-bootstrap';

const New_authenticationPage = () => {

    // from old one
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
          console.log("poitholo da punda")
            router.push('/');
            sessionStorage.setItem('Token',res.user.accessToken);
            toast.success("created successfully")
            console.log(res.user);
        }).catch( err => {
          toast.error("User Already Registered");
        });;
      }

      const siginwithemailandpass = ()=>{
        console.log("came to login")
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
    // end of old
    // use use effect in this 
    useEffect(() => {
      const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector(".login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector(".signup-link a");

      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });
    });
    
    useEffect(()=>{
      let token = sessionStorage.getItem('Token')
  
      if(token){
        router.push('/')
      }
    },[])


    return (
        <div className='flex justify-center mt-5'>
              <div className="wrapper">
      <div className="title-text">
        <div className="title login">Login Form</div>
        <div className="title signup">Signup Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked onChange={e => {}} />
          <input type="radio" name="slide" id="signup" />
          <label htmlFor="login" className="slide login">Login</label>
          <label htmlFor="signup" className="slide signup">Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <div  className="login" style={{"zIndex":'1000'}}>
            <div className="field">
            <input type="email" placeholder="Enter email" value={email} name="email" size={30} onChange={(e) =>  setEmail(e.target.value)}/>
            </div>
            <div className="field">
            <input type="password" value={password} name="password" size={30} placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
            </div>
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            {/* <div className="field btn"> */}
              {/* <div className="btn-layer"></div> */}
              <Button variant="primary" type="submit" className="mt-4" onClick={ siginwithemailandpass}>
                Signin
            </Button>
            {/* </div> */}
            <div className="signup-link">Not a member? <a href="">Signup now</a></div>
          </div>
          <form action="#" className="signup">
            <div className="field">
            <input type="email" placeholder="Enter email" value={email} name="email" size={30} onChange={(e) =>  setEmail(e.target.value)}/>
            </div>
            <div className="field">
              <input type="password" placeholder="Password" value={password} onChange={(e) =>  setpassword(e.target.value)} required/>
            </div>
            {/* <div className="field">
              <input type="password" placeholder="Confirm password" required/>
            </div> */}
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" onClick={signup}/>
            </div>
          </form>
        </div>
      </div>
    </div>

        </div>
    );
}

export default New_authenticationPage;
