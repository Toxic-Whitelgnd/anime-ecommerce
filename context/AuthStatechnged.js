import React,{useEffect,useState,useContext,createContext} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";



const Authkomali = createContext();

export const AuthStatechnged = ({children}) => {
  const auth = getAuth();

  const [user1,setuser] = useState(null);
  const dname = '';

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        dname = user.displayName;
        setuser(user)
        console.log(dname,uid);

      } else {
       
      }
    });
  });

  // console.log("user"+user1.displayName);

  return (
    <Authkomali.Provider value={
      {user1,setuser,dname}
    }>
      {children}
      </Authkomali.Provider>
  )
}

export const useAuthStateContext = () => useContext(Authkomali)