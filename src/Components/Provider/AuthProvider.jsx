import { useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firbase.config";
import { AuthContext } from "./AuthContext";



const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        name: "osama Hossain"
    })


    const authData = {
        user,
        setUser,
    }

    return <AuthContext value={authData}>{children}</AuthContext>
}


export default AuthProvider;