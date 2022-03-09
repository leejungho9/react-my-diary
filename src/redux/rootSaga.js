import {all} from 'redux-saga/effects';
import { authSaga } from './auth';
import { diarySaga } from './diarys';

export default function* rootSaga() {
    yield all([authSaga(), diarySaga()]);
}