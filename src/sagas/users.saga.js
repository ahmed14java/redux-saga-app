import { GET_USERS_REQUEST, CREATE_USER_REQUEST, DELETE_USER_REQUEST  } from '../actions/types';
import { takeEvery, takeLatest, take , call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/user';
import * as api from '../api/users';

function* getUsers() {
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUserSuccess({
            items: result.data.data
        }))
    } catch (e) {
        
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(GET_USERS_REQUEST , getUsers);
}

function* createUser(action) {
    try {
        yield call(api.creatUser, action.payload);
        yield getUsers();
    } catch (e) {
        console.log(e);
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(CREATE_USER_REQUEST, createUser)
}

function* deleteUser(id) {
    try {
        yield call(api.deleteUser, id);
        yield getUsers();
    } catch (e) {
        console.log(e);
    }
}

function* watchDeleteUser() {
    while (true) {
        const action = yield take(DELETE_USER_REQUEST);
        yield call(deleteUser, action.payload);
    }
    
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUser)
];

export default usersSagas;