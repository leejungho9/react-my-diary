import { goBack } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import Detail from "../components/Detail"
import { logout as logoutSaga } from '../redux/auth';

const DetailContainer = () => {
    const dispatch = useDispatch();
    
    const {id} = useParams();
    const diaryId = parseInt(id) ;
    
    const diarys = useSelector(state => state.diarys.diarys);

    const error = useSelector(state => state.diarys.error);

    const logout = useCallback(()=> {
        dispatch(logoutSaga());
    },[dispatch])
  
    const back = useCallback(()=> {
        dispatch(goBack())
    }, [dispatch]);

   const diary =  diarys.find((diary)=> diary.diaryId === diaryId);
   console.log(diary);

    return <Detail diary = {diarys === null ? null : diarys.find((diary) => diary.diaryId === diaryId)} logout={logout} back={back} error={error} ></Detail>
}

export default DetailContainer;