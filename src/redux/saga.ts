import { all, fork } from "redux-saga/effects";

import listMgtSaga from "../views/listsearch/redux/saga";
import loginSaga from "../views/login/redux/saga";

import commonSaga from "./commonSaga";
export default function* rootSaga() {
  // [es6] yield : 순차적으로 실행
  // all : 제너레이터 함수를 배열의 형태로 인자로 넣어주면, 제너레이터 함수들이 병행적으로 동시에 실행되고, 전부 resolve될때까지 기다린다
  yield all([fork(commonSaga), fork(listMgtSaga), fork(loginSaga)]);
}
