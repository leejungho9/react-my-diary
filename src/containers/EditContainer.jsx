import { goBack } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Edit from "../components/Edit"
import { logout as logoutSaga} from "../redux/auth";
import {editDiary as editSaga} from "../redux/diarys"
const EditContainer = () => {
    const dispatch = useDispatch();

    const {id} = useParams();
    const diaryId = parseInt(id);

    const diarys = useSelector((state) => state.diarys.diarys);

    const loading = useSelector((state) => state.diarys.loading);
    
    const error = useSelector((state) => state.diarys.error);
    
    const back = useCallback(()=> {
        dispatch(goBack())
    },[dispatch]);
    
    const logout = useCallback(()=> {
        dispatch(logoutSaga());
    }, [dispatch]);

    const edit = useCallback((diary)=> {
        dispatch(editSaga(diaryId, diary));
    },[ dispatch, diaryId])
    
    return (
        <Edit diary = {diarys === null ? null : diarys.find((diary) => diary.diaryId === diaryId)} back={back} logout={logout} loading={loading} error={error} edit={edit} ></Edit>
    )

}

export default EditContainer;