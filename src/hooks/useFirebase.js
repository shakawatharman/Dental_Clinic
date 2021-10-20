import initializeAuthentication from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});

  const googleSignIn = () => {
 
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
    
  };

    const registerWithEmail = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userData) => {
       
        const user= userData.user;
        console.log(user)
       
      })
      
    }


  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
   
    });
    return () => unSubscribed;
  }, []);

  const logOut = () => {
  
    signOut(auth).then(() => {})
   
    
  };

  return {
    googleSignIn,
    user,
    logOut,
    registerWithEmail
  };
};

export default useFirebase;
