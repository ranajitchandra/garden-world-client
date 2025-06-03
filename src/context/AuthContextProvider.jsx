import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext()

const auth = getAuth(app);

export default function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [theTheme, setTheTheme] = useState(true)
    console.log(user)

    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateProfileUser = (info) => {
        return updateProfile(auth.currentUser, info)
    }
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    
    useEffect(() => {
        localStorage.setItem("item", JSON.stringify([]));

        const unSubscriber = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser)
            setLoading(false)

        })

        return () => {
            unSubscriber()
        }
    }, [])


    const authData = {
        user,
        setUser,
        loading,
        loginUser,
        theTheme,
        setTheTheme,
        createUser,
        logOutUser,
        updateProfileUser,
        loginWithGoogle,
        resetPassword,
    }

    return (
        <>
            <AuthContext value={authData}>
                {children}
            </AuthContext>
        </>
    )
}