import { call, put, fork, take, select } from "redux-saga/effects";

export function* handleTest() {
    while (true) {
        yield 1;
        yield 2;
    }
}

export default function* rootSaga() {
    yield fork(handleTest);
}
