import { goBack } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "../components/Add";
import { logout as logoutSagaStart} from "../redux/auth";

const AddContainer = () => {
    const loading = useSelector(state => state.diarys.loading);
    
    const dispatch = useDispatch();
  
    const back = useCallback(()=> {
        dispatch(goBack())
    }, [dispatch])
    
    const logout = useCallback(()=> {
        dispatch(logoutSagaStart());
    },[dispatch])
    return <Add loading={loading} back={back} logout={logout}/>;
}

export default AddContainer;