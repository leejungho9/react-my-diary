
import { push } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List";
import { logout } from "../redux/auth";


export default function ListContainer() {
    const dispatch = useDispatch();
    const diarys = useSelector(state => state.diarys.diarys);
    const loading = useSelector(state => state.diarys.loading);
    const goAdd = useCallback(()=> {
        dispatch(push("/add"));
    },[dispatch])
    return <List 
    diarys = {diarys} 
    loading={loading}
    logout={logout}
    goAdd ={goAdd}/>

};
