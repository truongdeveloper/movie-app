

import { loginAction } from '../actions';
import { loginConstants } from '../constants';
import {
    call,
    delay,
    put,
    takeLatest,
} from 'redux-saga/effects';
import { get, isEmpty } from 'lodash';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/Common/api/config';
import { setAccessToken, setRefreshToken, setUserInfo } from '@/Common/stograte';
interface actionType {
    type: string;
    payload?: any;
    meta?: any;
    error?: boolean;
}

function* actionLoginAccount(action: actionType): any {
    try {
        yield delay(500);
        const data = yield call(signInWithPopup, auth, provider);
        if(!isEmpty(data.user)){
            const userInfo = {
                Name: data.user.displayName,
                Email: data.user.email,
                Photo: data.user.photoURL,
                UserID: data.user.uid,
            }
            const accessToken = data.user.accessToken
            const refreshToken = data.user.refreshToken
            yield setUserInfo(userInfo);
            yield setAccessToken(accessToken);
            yield setRefreshToken(refreshToken);
            yield put(loginAction.fetchLoginAccountSuccess(data, ""))
        }
        
    } catch (error) {
        // console.log("ahihi")
        yield put(loginAction.fetchLoginAccountFailed(error));
    }
}

export function *watchLogin() {
    yield takeLatest(loginConstants.LOGIN_ACCOUNT, actionLoginAccount);
}