

import { loginAction } from '../actions';
import { loginConstants } from '../constants';
import {
    call,
    delay,
    put,
    takeLatest,
} from 'redux-saga/effects';
import { get } from 'lodash';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/Common/api/config';
import { LoginGoogle } from '../Services/login.service';
interface actionType {
    type: string;
    payload?: any;
    meta?: any;
    error?: boolean;
}

function* actionLoginAccount(action: actionType): any {
    try {
        yield delay(500);
        const data = yield call(LoginGoogle);
        console.log(data)
    } catch (error) {
        // console.log("ahihi")
        yield put(loginAction.fetchLoginAccountFailed(error));
    }
}

export function *watchLogin() {
    yield takeLatest(loginConstants.LOGIN_ACCOUNT, actionLoginAccount);
}