/*
     AUTHOR: KHURAM HASEEB
    SUMMARY: IMPORT THE SAGA FROM THE REDUX SAGA AND IN THIS FILE ALL THE
             AUTHENFICATION SAGA FUNCTION THAT USED IN THE APP 
*/

// IMPORT THE PUT,CALL HOOKS FROM THE REDUX SAGA
import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import actionType from './auth.constant';
import axios from 'axios';


// LOGIN IN WITH GMAIL AUTHENTICATION
function* getGmailData(action: any): Generator<any> {
    try {
        // USER GMAIL INFO GET FROM GOOGLE ACCOUNT AND CALL THE API
        const response: any = yield call(axios.post, "https://jsonplaceholder.typicode.com/users", action.params.data as any);

        // IF THE USER FIRST TIME LOGIN THEN IT MOVE TO USER PROFILE INFO COMPONENT
        if (response) {
            // SET THE STORAGE OF THE USER INFORMATION DATA

            yield put({
                type: actionType.LOGIN_GMAIL_SUCCESS,
                payload:
                {
                    data: response,
                },
            })
        }

        // IF THE USER ALREADY LOGIN WITH GOOGLE ACCOUNT THEN IT MOVE TO HOME PAGE
        else if (response.data.success === true && response.data.user.googleid !== null && response.data.user.dateofbirth !== null) {
            // SHOW THE TOAST MESSAGE AND MOVE TO HOME PAGE
            action.params.navigation.navigate('Dashboard')
            yield put({
                type: actionType.LOGIN_GMAIL_SUCCESS,
                payload:
                {
                    data: response.data.user,
                },
            })
        }

        // SHOW THE ERROR IF USER NOT SUCCESSFULLY LOGIN WITH GOOGLE ACCOUNT
        else {
            yield put({
                type: actionType.LOGIN_GMAIL_FAILURE,
            });
        }
    }
    catch (error) {
        yield put({
            type: actionType.LOGIN_GMAIL_FAILURE,
        });
    }
}


// IMPORT ALL THE FUNCTION OF SAGA IN THE TAKEEVERY HOOKS OF REDUX SAGA
export function* AuthSagas() {
    yield takeEvery(actionType.LOGIN_GMAIL_REQUEST, getGmailData);

}



