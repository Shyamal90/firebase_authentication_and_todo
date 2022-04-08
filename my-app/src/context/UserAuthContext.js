import { createContext, useContext, useEffect,useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();



export function UserAuthContextProvider({children}){
    const [user,setUser] = useState({});
    /*=====================================
                Sing Up
    ======================================= */

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    /*=====================================
                Sing In
    ======================================= */

    function signIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }


    /*=====================================
                Sing Out 
    ======================================= */



    /*=====================================
                Get Current User 
    ======================================= */
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    },[])

    return <userAuthContext.Provider value={{user,signUp,signIn}}>{children}</userAuthContext.Provider>
    
}

export function useUserAuth(){
    return useContext(userAuthContext)
}