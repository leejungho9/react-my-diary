import { Redirect } from 'react-router-dom';
import SigninContainer from '../containers/SigninContainer';
import useToken from '../useToken';



export default function Signin() {
    const token = useToken();

    if(token !== null) {
        return <Redirect to="/" />;
    }
    return <SigninContainer/>;
}