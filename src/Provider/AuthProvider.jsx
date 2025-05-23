import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';


export const AuthCon =createContext();

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    
    const [user,setUser]= useState(null)
    const createUser =(email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser=(updateData)=>{
       return updateProfile(auth.currentUser, updateData) 
    }

    const logOut= ()=>{
       return signOut(auth) 
    }

    useEffect(()=>{
       const unsunscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{
            unsunscribe()
        }
    },[])
    const authData ={
        user,
        setUser,
        createUser,
        logOut,
        updateUser
    }
    return <AuthCon value={authData}>{children}</AuthCon>
};

export default AuthProvider;