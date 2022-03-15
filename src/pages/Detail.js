import { Redirect } from "react-router-dom";
import useToken from "../useToken";
import DetailContainer from "../containers/DetailContainer"


export default function Detail() {
    const token = useToken();

    if(token === null ) {
        return <Redirect to="/signin"/>;
    }
        return <DetailContainer/>;

}

