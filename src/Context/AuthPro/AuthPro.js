import React, {useState,
    useEffect, createContext } from 'react';

import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup}  from 'firebase/auth';
import app from './../../Firebase/Firebase';

export  const AuthContext = createContext()

const auth = getAuth(app)

const AuthPro = ({children}) => {
  
    const [user,setUser] = useState(null);


    const providerLogin = (provider) => {

        return signInWithPopup(auth,provider,)
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

    const authInfo ={user,providerLogin}

    return (
        <AuthContext.Provider value={ authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthPro;