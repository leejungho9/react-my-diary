import { goBack, push } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import Detail from "../components/Detail"
import { logout as logoutSaga } from '../redux/auth';
import { deleteDiary as deleteSaga } from '../redux/diarys';


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

    const deletediary = useCallback((diary) => {
        dispatch(deleteSaga(diary));
    }, [dispatch]);

    const editdiary = useCallback(() => {
        dispatch(push(`/edit/${id}`));
    },[dispatch , id])

    return <Detail diary = {diarys === null ? null : diarys.find((diary) => diary.diaryId === diaryId)} logout={logout} back={back} error={error} deletediary={deletediary} editdiary={editdiary}></Detail>
}

export default DetailContainer;