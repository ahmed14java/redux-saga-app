import { GET_USERS_REQUEST , GET_USERS_SUCCESS , CREATE_USER_REQUEST, DELETE_USER_REQUEST } from './types';

export const getUsersRequest = () => ({
    type: GET_USERS_REQUEST
})

export const getUserSuccess = ({items}) => ({
    type: GET_USERS_SUCCESS,
    payload: items
})

export const createUser = (userCredentials) => ({
    type: CREATE_USER_REQUEST,
    payload: userCredentials
})

export const deleteUser = (userId) => ({
    type: DELETE_USER_REQUEST,
    payload: userId
})