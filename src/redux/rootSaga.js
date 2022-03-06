import {all} from 'redux-saga/effects';
import { authSaga } from './reducer';

export default function* rootSaga() {
    yield all([authSaga()]);
}