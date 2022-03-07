import { useCallback } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/Signin";
import {login as loginSagaStart} from '../redux/auth'



export default function SigninContainer() {
    const dispatch = useDispatch();

    const login = useCallback((reqData) => {
        dispatch(loginSagaStart(reqData));
    }, [dispatch]);
 


    return <LoginForm login={login}/>;
}