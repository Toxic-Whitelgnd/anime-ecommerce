import firebase from "firebase/app";
import "firebase/auth"

export const AuthService = {
    loginWithGoogle: async () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log("came to auth sefrvice")
        try {
            const userCred = await firebase.auth().signInWithPopup(provider);
            return{
                user: userCred,
            }
        } catch (error) {
            return{
                error:error.message,
            }
            
        }
        
    },
    logout: async () =>{
        await firebase.auth().signOut();
    }
}

