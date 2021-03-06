import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';


firebase.initializeApp({
    apiKey: process.env.REACT_APP_FB_API,
    authDomain: process.env.REACT_APP_FB_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECTID,
    storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSENGERSENDERID,
    appId: process.env.REACT_APP_FB_APPID
});

const AuthContext = createContext()


export const useAuth = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating]= useState(true);

    const sendSignInLinkToEmail = email => {
        return firebase.auth().sendSignInLinkToEmail(email,{
            url: 'http://localhost:3000/confirm',
            handleCodeInApp: true,
        }).then(()=> {
            return true;
        })
    };
    const signInWithEmailLink = (email, code) => {
        return firebase.auth().signInWithEmailLink(email, code).then(result => {
            setUser(result.user)
            return true;
        })
    }
    const logout = () => {
        return firebase.auth().signOut().then(()=> {
            setUser(null);
        })
    }

    useEffect(()=> {
        const unsubscribe =firebase.auth().onAuthStateChanged(user => {
            setUser(user)
            setIsAuthenticating(false)
        })

        return ()=> unsubscribe();
    },[])

    const values = {
        user,
        isAuthenticating,
        sendSignInLinkToEmail,
        signInWithEmailLink,
        logout
    }

    return (
        <AuthContext.Provider value={values}>
        {!isAuthenticating && children}
        </AuthContext.Provider>
    )

}