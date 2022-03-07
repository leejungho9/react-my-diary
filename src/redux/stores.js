import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import { routerMiddleware } from "connected-react-router";
import history from "../history";

const stores = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducer(history), composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history))));
    sagaMiddleware.run(rootSaga);
    
    return store;
};

export default stores;