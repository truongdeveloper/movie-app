import { loginConstants } from '../constants';

export const fetchLoginAccount = (dataSubmit: any) =>{
    return  ({
        type: loginConstants.LOGIN_ACCOUNT,
        payload: {
            
        },
    });
};

export const fetchLoginAccountSuccess = (data: any, message: string) => ({
    type: loginConstants.LOGIN_ACCOUNT_SUCCESS,
    payload: {
        data,
        message,
    },
});

export const fetchLoginAccountFailed = (error: any) => ({
    type: loginConstants.LOGIN_ACCOUNT_FAILED,
    payload: {
        error,
    },
});
