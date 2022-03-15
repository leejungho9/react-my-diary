import { Redirect } from "react-router-dom";
import useToken from "../useToken";
import EditContainer from "../containers/EditContainer"


export default function Edit() {
    const token = useToken();
        if(token === null) {
            return <Redirect to="/signin"/>;
        }
        return <EditContainer/>;
}