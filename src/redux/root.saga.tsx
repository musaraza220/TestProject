/*
     AUTHOR: KHURAM HASEEB
    SUMMARY: IMPORT ALL THE SAGA FILES IN THIS FILE WITH COMBINE ROOTSAGAS FUNCTION
*/

// IMPORT ALL, FORK HOOKS FROM THE REDUX SAGA FOR COMBINE OF ALL SAGA FILES
import { all, fork } from 'redux-saga/effects';
import { AuthSagas } from './auth/auth.saga';

// MAIN SAGA FUNCTION THAT COMBINE ALL THE SAGA FILES
export default function* rootSagas() {
  yield all([fork(AuthSagas)]);
}