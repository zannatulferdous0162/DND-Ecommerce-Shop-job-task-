import React, { createContext, useEffect, useState } from 'react';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

export const authContext= createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const provider=new GoogleAuthProvider()

    const createAccount=(email,password)=>{
        
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
     
      return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (name, photo) => {
        
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const logOut = () => {
       
        return signOut(auth);
    }
    const googleLogin = () => {
        
        return signInWithPopup(auth,provider) ;
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
          
        
        }) 
        return ()=>{
            return unsubscribe()
        }
    },[])
    const value={
        user,
        createAccount,
        updateUserProfile,
        loginUser,
        logOut,
        googleLogin,
        loading,
      }
    return (
       <authContext.Provider value={value}>
          {children}
       </authContext.Provider>
    );
};

export default AuthProvider;