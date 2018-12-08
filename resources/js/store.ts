import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import rootSaga from "./sagas";

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
