import { Redirect } from "react-router-dom";
import useToken from "../useToken";
import DetailContainer from "../containers/DetailContainer"


const Detail= () => {
    const token = useToken();

    if(token === null ) {
        return <Redirect to="/signin"/>;
    }
        return <DetailContainer/>;

}

export default Detail;