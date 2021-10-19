import initializeAuthentication from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
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
    // .then((result) => {
    //   setUser(result.user);
    // });
  };
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    googleSignIn,
    user,
    logOut,
  };
};

export default useFirebase;
