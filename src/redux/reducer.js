import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from './auth';
import diarys from './diarys';

const reducer = (history) => 
combineReducers({
    auth,
    diarys,
    router : connectRouter(history),
});

export default reducer;
