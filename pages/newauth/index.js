import React,{useState,useEffect} from 'react'

import {useRouter} from "next/router"
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";
import toast from 'react-hot-toast';

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
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");

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
    }, []);
    
    useEffect(()=>{
      let token = sessionStorage.getItem('Token')
  
      if(token){
        router.push('/')
      }
    },[])


    return (
        <div className='flex justify-center mt-5'>
              <div class="wrapper">
      <div class="title-text">
        <div class="title login">Login Form</div>
        <div class="title signup">Signup Form</div>
      </div>
      <div class="form-container">
        <div class="slide-controls">
          <input type="radio" name="slide" id="login" checked />
          <input type="radio" name="slide" id="signup" />
          <label for="login" class="slide login">Login</label>
          <label for="signup" class="slide signup">Signup</label>
          <div class="slider-tab"></div>
        </div>
        <div class="form-inner">
          <form action="#" class="login" style={{"zIndex":'1000'}}>
            <div class="field">
            <input type="email" placeholder="Enter email" value={email} name="email" size={30} onChange={(e) =>  setEmail(e.target.value)}/>
            </div>
            <div class="field">
            <input type="password" value={password} name="password" size={30} placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
            </div>
            <div class="pass-link"><a href="#">Forgot password?</a></div>
            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Login" onClick={siginwithemailandpass}/>
            </div>
            <div class="signup-link">Not a member? <a href="">Signup now</a></div>
          </form>
          <form action="#" class="signup">
            <div class="field">
            <input type="email" placeholder="Enter email" value={email} name="email" size={30} onChange={(e) =>  setEmail(e.target.value)}/>
            </div>
            <div class="field">
              <input type="password" placeholder="Password" value={password} onChange={(e) =>  setpassword(e.target.value)} required/>
            </div>
            {/* <div class="field">
              <input type="password" placeholder="Confirm password" required/>
            </div> */}
            <div class="field btn">
              <div class="btn-layer"></div>
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
