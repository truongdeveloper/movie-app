import { loginConstants } from '../constants';

const initialState = {
    isLoading: true,
    isSuccess: false,
    error: null,
    message: '',
};

const reducer = (state = initialState, action: { type: any; payload: { data?: any; error?: any;message?: string }; }) => {
    switch(action.type) {
        case loginConstants.LOGIN_ACCOUNT: {
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;