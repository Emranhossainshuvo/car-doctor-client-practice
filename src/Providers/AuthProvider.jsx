import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(); 
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const createUser = (email, password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        }); 
        return () => {
            return unSubscribe(); 
        }

    }, [])

    const authData = {
        user, 
        loading, 
        createUser, 
        signIn
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;