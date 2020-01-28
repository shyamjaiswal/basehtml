import { FETCH_USER, FAIL_USER, URL } from './Type';
import axios from 'axios';


function success(data) {
    return {
        type: FETCH_USER,
        payload: {
            data
        }
    }
}
function fail(error) {
    return {
        type: FAIL_USER,
        payload: {
            error
        }
    }
}


export function fetchUser() {
    return function (dispatch) {
        return axios.get(URL.FETCH_USER)
            .then(({ data }) => {
                dispatch(success(data));
            })
            .catch(error => {
                console.log("error = ", error);
                dispatch(fail(error));
            });
    };
}