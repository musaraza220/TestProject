/*
     AUTHOR: KHURAM HASEEB
    SUMMARY: IMPORT ALL THE REDUCERS FILE IN THIS FILE WITH COMBINE REDUX COMBINE HOOK
*/

// IMPORT COMBINEREDUCERS HOOKS FROM THE REDUX SAGA FOR COMBINE OF ALL REDUCER
import { combineReducers } from 'redux';

// IMPORT MAINREDUCERS FROM "./MAIN/REDUCERS";
import AuthReducers from "./auth/auth.reducer";
// IN THIS FUNCTION COMBINE THE ALL REDUCERS FILE
const rootReducer = combineReducers({
    AuthReducers: AuthReducers,
});
export default rootReducer