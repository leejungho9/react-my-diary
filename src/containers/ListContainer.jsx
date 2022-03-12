
import { push } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List";
import { logout as logoutSagaStart } from "../redux/auth";
import { getDiary as getDiarySagaStart} from "../redux/diarys";

export default function ListContainer(props) {
    const dispatch = useDispatch();
    const diarys = useSelector(state => state.diarys.diarys);
    const loading = useSelector(state => state.diarys.loading);
    
    const getDiary = useCallback(()=> {
        dispatch(getDiarySagaStart());
    },[dispatch])

    const goAdd = useCallback(()=> {
        dispatch(push("/add"));
    },[dispatch])
    
    const logout = useCallback(()=> {
        dispatch(logoutSagaStart());
    },[dispatch])

    return <List 
    {...props}
    diarys = {diarys} 
    loading={loading}
    logout={logout}
    goAdd ={goAdd}
    getDiary={getDiary}
    />
};
