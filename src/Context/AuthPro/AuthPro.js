import React, {useState,
useEffect, createContext } from 'react';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut}  from 'firebase/auth';

import app from './../../Firebase/Firebase';

export  const AuthContext = createContext()

const auth = getAuth(app)

const AuthPro = ({children}) => {
  

    const [loading,setLoading] = useState(true);

    const [user,setUser] = useState(null);


    const providerLogin = (provider) => {
        setLoading(true)
     return signInWithPopup(auth,provider,logOut)
    }

      const signIn = (email,password) => {
         setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)

      }

       const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


 useEffect(() => {
  const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{

            console.log("object",currentUser);
            setUser(currentUser)
            setLoading(false);

           })

           return () => {
            unsubscribe();
           }

 },[])

        const createUser = (email,password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
        }

    const authInfo ={loading, user,providerLogin,logOut,createUser, signIn}

    return (
        <AuthContext.Provider value={ authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthPro;