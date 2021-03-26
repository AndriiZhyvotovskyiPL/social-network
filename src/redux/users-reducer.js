import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOGGLE_IN_PROGRESS = 'TOGGLE_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IN_PROGRESS:
            return {...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)}

        default:
            return state;
    }
}

//actionCreator

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleInProgress = (inProgress, userId) => ({type: TOGGLE_IN_PROGRESS, inProgress, userId})

//thunkCreator

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.requestUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleInProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleInProgress(false, userId));
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleInProgress(true, userId));
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleInProgress(false, userId));
            })
    }
}

export default usersReducer;