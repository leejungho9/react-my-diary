// DiaryState {diarys : Diary[] , loading : boolean, error :null}


import { push } from "connected-react-router";
import { createActions } from "redux-actions";
import { handleActions } from "redux-actions";
import {takeEvery, put, takeLatest, select} from "redux-saga/effects";
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

export const {addDiary , getDiary}  = createActions(
    {
      ADD_DIARY : (diary) => ({diary}),
    }, {prefix},
  );

// function* getDiarySaga() {
//     try{
//         yield put(pending());
//         const token = yield select((state) => state.auth.token);
//         const diarys = yield call( token);
//         yield put(success(diarys));
//     }catch(error){
//         yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
//     }
// }

function* addDiarySaga(action) {
    try{
        console.log(action)
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
        yield put(fail(new Error(error?.response?.data?.error || 'ERROR')))
    }

}
export function* diarySaga() {
    // yield takeLatest(`${prefix}/GET_DIARY`, getDiarySaga);
    yield takeEvery(`${prefix}/ADD_DIARY`, addDiarySaga);
}

