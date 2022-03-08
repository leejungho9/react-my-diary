// DiaryState {diarys : Diary[] , loading : boolean, error :null}

import { createActions } from "redux-actions";
import { handleActions } from "redux-actions";



const initalState = {
    diarys : null,
    loading : false,
    error : null,
}

const prefix = 'my-diary/diary';

export const {pending, success, fail} = createActions("PENDING", "SUCCESS", "FAIL", {prefix});

const reducer = handleActions({
    PENDING : (state) => ({...state, loading : true, error: null}),
    SUCCESS : (state, actions) => ({diarys : actions.payload, loading : false ,error : null}),
    FAIL : (state, actions) => ({...state, loading : false, error : actions.payload})
}, initalState, {prefix});

export default reducer;


//Saga 정의
export function booksSaga() {
    
}