import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, GithubAuthProvider  } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    /* *** Register User ****/
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* *** User Login *****/
    const signIn = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    /* *******  Google Sign In ********  */
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }


    /* **** Github Sign In */
    const githubProvider = new GithubAuthProvider();

    const githubSignIn = () =>{
        setLoader(true);
        return signInWithPopup(auth, githubProvider)
    }


    /* *** User Profile Update **** */

    const updateUser = (name, photoUrl) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl, 
        })
    }

    /* **** User Sign Out **** */
    const logOut = () =>{
        setLoader(true);
        return signOut(auth);
    }


    /* *** Observing the user **** */

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoader(false);
        })

        return ()=>{
            unSubscribe()
        }

    } ,[])


    const authInfo = {
        user,
        loader,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        updateUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,

}

export default AuthProvider;