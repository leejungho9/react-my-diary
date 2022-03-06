import { handleActions } from "redux-actions";
import { createActions } from "redux-actions";
import { takeEvery, put } from "redux-saga/effects";

// interface AuthState {
//     token : string | null;
//     loading : Boolean;
//     error : Error | null;
// }

const initalState = {
    token : null,
    loading : false,
    error : null,
};

const prefix = 'my-diary/auth';


export const {pending, success, fail} = createActions("PENDING", "SUCCESS", "FAIL", prefix);

const reducer = handleActions({
    PENDING : (state) => ({...state, loading : true, error : null}),
    SUCCESS : (state,actions)=> ({token : actions.payload, loading : false, error: null}),
    FAIL : (state,actions)=> ({...state, loading : false, error: actions.payload}),

}, initalState, {prefix});

export default reducer;


//Saga 정의
export const {login, logout} = createActions("LOGIN","LOGOUT", {prefix})

function* loginSaga(action) {
    try{
        yield put(pending());
        
    }catch(error){

    }
}

function* logoutSaga() {

}

export function* authSaga() {
    yield  takeEvery(`${prefix}/LOGIN`, loginSaga);
    yield  takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}