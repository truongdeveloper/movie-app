import { fork } from 'redux-saga/effects';
import { watchLogin } from './login.saga';


function *rootSaga() {
    yield fork(watchLogin);
}

export default rootSaga;