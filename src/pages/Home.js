import { Redirect } from "react-router-dom";
import ListContainer from "../containers/ListContainer";
import useToken from "../useToken";

export default function Home() {
    const token = useToken();

    if(token === null) {
        return <Redirect to="/signin"/>;
    }
    return <ListContainer/>;
}