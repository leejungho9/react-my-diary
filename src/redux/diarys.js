// DiaryState {diarys : Diary[] , loading : boolean, error :null}


import { push } from "connected-react-router";
import { createActions } from "redux-actions";
import { handleActions } from "redux-actions";
import {takeEvery, put, select} from "redux-saga/effects";
import moment from "moment";


const initalState = {
    diarys : null,
    loading : false,
    error : null,
}

const prefix = 'my-diary/diarys';

export const {pending, success, fail} = createActions("PENDING", "SUCCESS", "FAIL", {prefix});

const reducer = handleActions({
    PENDING : (state) => ({...state, loading : true, error: null}),
    SUCCESS : (state, action) => ({diarys : action.payload, loading : false ,error : null}),
    FAIL : (state, actions) => ({...state, loading : false, error : actions.payload})
}, initalState, {prefix});

export default reducer;


//Saga 정의

export const {addDiary , deleteDiary, editDiary}  = createActions(
    {
      ADD_DIARY : (diary) => ({diary}),
      DELETE_DIARY : (diary) => ({diary}),
      EDIT_DIARY : (diaryId,diary) => ({diaryId, diary})
    }, {prefix},
  );


function* addDiarySaga(action) {
    try{
        yield push(pending());
        const diary = action.payload.diary;
        const diarys = yield select(state => state.diarys.diarys);
        const createdAt = moment().format('MM-DD-YYYY hh:mm a')
       
        if(diarys === null){
            yield put(success([diary]));
            const diaryId = 1;
            diary['diaryId'] = diaryId;

        } else {
            yield put(success([...diarys , diary]));
            diary['diaryId'] = diarys.length + 1;
        }
       
        diary['createdAt'] = createdAt;
        yield put(push('/'));
    } catch(error) {
        yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
    }

}

function* deleteDiarySaga(action) {
    try{
        console.log(action)
        yield put(pending());
        const diary = action.payload.diary
        const diarys = yield select(state => state.diarys.diarys);
        const diaryId = (diary.diaryId);
        yield put(success(diarys.filter(diary => diary.diaryId !== diaryId)));
        yield put(push('/'));
    } catch(error) {
        yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
    }
}

function * editDiarySaga(action ){
    try{
        console.log('hf');
        yield put(pending());
        const diarys = yield select(state => state.diarys.diarys);
        
        const newdiary= yield (action.payload.diaryId, action.payload.diary);   
        newdiary['diaryId'] = action.payload.diaryId;
        console.log(newdiary);
        yield put(success(diarys.map((diary)=> (diary.diaryId === newdiary.diaryId?  newdiary : diary))));
        yield put(push('/'));
    } catch(error) {
        yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
    }
}
export function* diarySaga() {
    yield takeEvery(`${prefix}/ADD_DIARY`, addDiarySaga);
    yield takeEvery(`${prefix}/DELETE_DIARY`, deleteDiarySaga);
    yield takeEvery(`${prefix}/EDIT_DIARY`, editDiarySaga);
}

