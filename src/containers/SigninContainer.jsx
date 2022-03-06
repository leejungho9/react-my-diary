import { useCallback } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/Signin";




export default function SigninContainer() {

    const login = useCallback(() => {}, []);
    console.log(login)
    
    return <LoginForm login={login}/>;
}