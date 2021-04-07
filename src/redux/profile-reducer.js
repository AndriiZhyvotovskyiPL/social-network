import {profileAPI} from "../api/api";

const ADD_POST = 'social-network/profile/ADD_POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'social-network/profileSET_PROFILE_STATUS';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min));
}

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: getRandomInt(1, 100),
            src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: getRandomInt(1, 100),
            src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'
        }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: getRandomInt(1, 100),
                src: 'https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg'
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_PROFILE_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

//actionCreator

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})

//thunkCreator

export const getProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(data))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(userId);
        dispatch(setProfileStatus(data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        const data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    }
}

export default profileReducer;