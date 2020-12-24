const SET_AUTH_USER_LOGIN = 'SET_AUTH_USER_LOGIN';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_LOGIN:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserLogin = (userId, email, login) => ({type: SET_AUTH_USER_LOGIN, data: {userId, email, login}})

export default authReducer;