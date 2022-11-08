import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../Firebase/Firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const signUpUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };
    
    const signInWithSocial = (provider) =>{
        return signInWithPopup(auth, provider);
    };
    
    const signOutUser = () =>{
        return signOut(auth);
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('on auth state change: ', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[])
    
    const authInfo = {
        user, setUser,
        loading, setLoading,
        signUpUser, signInUser, signInWithSocial,
        signOutUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;