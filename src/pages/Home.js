import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import ListContainer from "../containers/ListContainer";
import { logout } from "../redux/auth";
import useToken from "../useToken";

export default function Home() {
    const token = useToken();
    const dispatch = useDispatch();
    
    if(token === null) {
        return <Redirect to="/signin"/>;
    }
    return (
            <div>
            <button onClick={click}>logout</button>
            </div>

         );
        function click () {
            console.log('click');
            dispatch(logout());
        }
}