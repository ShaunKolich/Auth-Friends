import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILED,
    ADD_FRIENDS,

} from '../components/actions';

const initialState = {
    isLoading: false,
    errorMessage: null,
    name: '',
    age: '',
    email: ''

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FRIENDS_START: {

            return {
                ...state,
                isLoading: true
            }
        }
        case GET_FRIENDS_SUCCESS: {
            const { id, name, age, email } = action.payload;

            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                id,
                name,
                age,
                email,
            }

        }
        case GET_FRIENDS_FAILED: {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.message,
            }
        }
        case LOGIN_START: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.message,
            }
        }
        default:
            return state
    }
}

