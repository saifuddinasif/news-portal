import React, {useState,
useEffect, createContext } from 'react';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut}  from 'firebase/auth';

import app from './../../Firebase/Firebase';

export  const AuthContext = createContext()

const auth = getAuth(app)

const AuthPro = ({children}) => {
  
    const [user,setUser] = useState(null);


    const providerLogin = (provider) => {

     return signInWithPopup(auth,provider,logOut)
    }

      const signIn = (email,password) => {
         
      return signInWithEmailAndPassword(auth,email,password)

      }

       const logOut = () => {

        return signOut(auth)
    }


 useEffect(() => {
  const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{

            console.log("object",currentUser);
            setUser(currentUser)
           })

           return () => {
            unsubscribe();
           }

 },[])

        const createUser = (email,password) => {

            return createUserWithEmailAndPassword(auth,email,password)
        }

    const authInfo ={user,providerLogin,logOut,createUser, signIn}

    return (
        <AuthContext.Provider value={ authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthPro;