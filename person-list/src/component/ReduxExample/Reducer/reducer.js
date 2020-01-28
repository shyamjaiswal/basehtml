import {
    FETCH_USER,
    FAIL_USER
} from '../Action/Type';

const initialState = {
    data: {}
}

export default (state = { ...initialState }, action = {}) => {
    switch (action.type) {
        case FETCH_USER:
            {
                const data = action.payload.data;
                state = {
                    ...initialState,
                    data,
                };
                return state;
            }
        case FAIL_USER:
            {
                const error = action.payload.error;
                state = {
                    ...initialState,
                    error,
                };
                return state;
            }
        default:
            return state;
    }
}