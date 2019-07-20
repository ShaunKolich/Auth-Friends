import axios from 'axios';


// export const LOGIN_START = 'LOGIN_START'
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_FAILED = 'LOGIN_FAILED'

export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_FAILED'

export const ADD_FRIENDS = 'ADD_FRIENDS'

export function addFriends(id, name, age, email) {
    return {
        type: ADD_FRIENDS,
        payload: {
            id,
            name,
            age,
            email

        }

    }
}

export function getFriends() {
    return (dispatch) => {
        dispatch({ type: GET_FRIENDS_START })

        // const headers = { Authorization: localStorage.getItem('token') }

        axios.get('http://localhost:5000/api/friends')
            .then((res) => {
                dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
                console.log(res);
            })
            .catch((err) => {
                dispatch({ GET_FRIENDS_FAILED })
                console.log(err);
            })


    }

}

// export function login(username, password) {
//     return (dispatch) => {
//         dispatch({ type: LOGIN_START })

//         return axios.post('http://localhost:5000/api/login', { username, password })
//             .then((res) => {
//                 localStorage.setItem('token')
//                 dispatch({ type: LOGIN_SUCCESS })
//                 console.log(res);
//             })
//             .catch((err) => {
//                 const payload = err.response ? err.response.data : err
//                 dispatch({ type: LOGIN_FAILED })
//             })
//     }
// }


