import { goBack } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "../components/Add";
import { logout as logoutSagaStart} from "../redux/auth";
import { addDiary as addDiarySagaStart} from "../redux/diarys";
import { getDiary as getDiarySagaStart} from "../redux/diarys";

const AddContainer = () => {
    const loading = useSelector(state => state.diarys.loading);
    const dispatch = useDispatch();
  
    const diarys = useSelector(  (state) => state.diarys.diarys);

    const back = useCallback(()=> {
        dispatch(goBack())
    }, [dispatch])
    
    const logout = useCallback(()=> {
        dispatch(logoutSagaStart());
    },[dispatch])

    const add = useCallback ((diary)=> {
        dispatch(addDiarySagaStart(diary))
    }, [dispatch])

    const getDiary = useCallback(()=> {
        dispatch(getDiarySagaStart());
    },[dispatch])

    return <Add diarys={diarys} loading={loading} back={back} getDiary={getDiary} logout={logout} add={add}/>;
}

export default AddContainer;