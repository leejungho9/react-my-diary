import { goBack } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "../components/Add";
import { logout as logoutSaga} from "../redux/auth";
import { addDiary as addDiarySagaStart} from "../redux/diarys";


const AddContainer = () => {
    const diarys = useSelector(
        (state) => state.diarys.diarys);
    
    const loading = useSelector(
        (state) => state.diarys.loading);
        
    const error = useSelector(
        (state) => state.diarys.error);
   
    const dispatch = useDispatch();
  
    const back = useCallback(()=> {
        dispatch(goBack())
    }, [dispatch])
    
    const logout = useCallback(()=> {
        dispatch(logoutSaga());
    },[dispatch])

    const add = useCallback ((diary)=> {
        dispatch(addDiarySagaStart(diary))
        console.log(diary);
    }, [dispatch])

    
    console.log(diarys)  
    
    


    return <Add  diarys={diarys} error={error} loading={loading} back={back} logout={logout} add={add}/>;
}

export default AddContainer;