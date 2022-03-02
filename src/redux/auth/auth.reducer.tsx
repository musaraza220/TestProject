/*
     AUTHOR: KHURAM HASEEB
    SUMMARY: IMPORT THE REDUCER  FROM THE REDUX SAGA AND IN THIS FILE ALL THE
             AUTHENFICATION REDUCER FUNCTION THAT USED IN THE APP
*/

// USER SETUP PROFILE IMAGE UPLOAD AUTH REDUCER
import actionType from './auth.constant';

// SET THE INITIAL STATE VARIABLE THAT WILL BE USED TO THE WHOLE APPLICATION.
const authState =
{
    isFetching: false, // IF THE REQUEST CALL THEN THE BOOLEAN STATE CHANGE
    bannerImages: [], // BANNER IMAGES DATA STORE 
    getFbData: [],  // WHEN USER LOGIN IN WITH FACEBOOK THEN DATA STORE
    getGmailData: [], // WHEN USER LOGIN WITH GOOGLE ACCOUNT THEN DATA STORE
    getAppleData: [], // WHEN USER LOGIN WITH APPLE ACCOUNT THEN DATA STORE
    privacyData: [], // USER PRIVACY DATA STORE
    splashScreenData: [], // SPLASH SCREEN DATA STORE 
    verifyUserData: [], // AFTER VERIFY USER THEN STORE THE USER INFORMATION
    error: '',  // SHOW THE ERROR OF STATIC DATA LOAD
    data: null, // PAYLOAD DATA STORE
    staticSignupdata: null, // STATIC SIGNUP DATA STORE THAT USED IN THE ERROR MESSAGE
    isFetchingSpliderScreen: false, // SWHEN SPLIT SCREEN LOAD THEN BOOLEAN STATE CALL
    user: {},
    addressesList: [], // PREVIOUS DATA OF LOCATION SAVED IN ASYNC STORAGE OF USER
}

// INTERFACE OF STATE INITILAIZED OF THE AUTHENTICATION
export type TypeOfAction =
    {
        type: string
        payload:
        {
            data: any,
            error: object,

        }
    }

// ALL THE AUTHENTICATION ,SLIDER AND USER PROFILE UPLOAD AND PROFILE DATA INSSIDE THE REDUCER
const authenticationReducer = (state = authState, action: TypeOfAction) => {

    switch (action.type) {
        // GMAIL DATA REQUEST
        case actionType.LOGIN_GMAIL_REQUEST:
            return { ...state, isFetching: true }

        // GMAIL LOGIN DATA DATA COME FROM SAGA AND STORE IN GETGMAILDATA STATE
        case actionType.LOGIN_GMAIL_SUCCESS:

            return {
                ...state,
                isFetching: false,
                verifyUserData: action.payload.data,
            }

        //  GMAIL LOGIN DATA HAS ERROR AND NO DATA COME FROM SAGA
        case actionType.LOGIN_GMAIL_FAILURE:
            return { ...state, isFetching: false }



        default:
            return state;
    }

}

// EXPORT THE AUTH REDUCER SO IT CAN BE IMPORTED IN ROOT REDUCER.
export default authenticationReducer;
