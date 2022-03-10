// DiaryState {diarys : Diary[] , loading : boolean, error :null}

import { PushpinTwoTone } from "@ant-design/icons";
import { push } from "connected-react-router";
import { createActions } from "redux-actions";
import { handleActions } from "redux-actions";
import {takeEvery, call, put, select, takeLatest} from "redux-saga/effects";
import DiaryService from "../services/DiaryService";


const initalState = {
    diarys : null,
    loading : false,
    error : null,
}

const prefix = 'my-diary/diarys';

export const {pending, success, fail} = createActions("PENDING", "SUCCESS", "FAIL", {prefix});

const reducer = handleActions({
    PENDING : (state) => ({...state, loading : true, error: null}),
    SUCCESS : (state, actions) => ({diarys : actions.payload, loading : false ,error : null}),
    FAIL : (state, actions) => ({...state, loading : false, error : actions.payload})
}, initalState, {prefix});

export default reducer;


//Saga 정의

export const {getDiary, addDiary} = createActions("GET_DIARY","ADD_DIARY", {prefix});

function* getDiarySaga() {
    try{
        yield put(pending());
        const token = yield select(state => state.auth.token);
        const diarys = yield call(DiaryService.getDiary,token);
        yield put(success(diarys));
    }catch(error){
        yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
    }
}

function* addDiarySaga(action) {
    try{
        yield push(pending());
        const token = yield select((state)=> state.auth.token);
        const diary = yield call(DiaryService.addDiary, token, action.payload.diary);
        const diarys = yield select(state => state.diarys.diarys);
        yield put(success([...diarys, diary]));
        yield put(push('/'));
    } catch(error) {
        yield put(fail(new Error(error?.response?.data?.error || 'ERROR')))
    }

}
export function* diarySaga() {
    yield takeLatest(`${prefix}/GET_Diary`, getDiarySaga);
    yield takeEvery(`${prefix}/ADD_DIARY`, addDiarySaga);
}

