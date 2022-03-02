/*
     AUTHOR: KHURAM HASEEB
    SUMMARY: IMPORT ALL THE ROOT REDUCER FILE  AND ROOT SAGA FILE 
             COMBINE ALL THE REDUX FILES IN THE MAIN STORE FILE
*/

// IMPORT CREATESTORE,APPLYMIDDLEWARE  HOOKS FROM THE REDUX  COMBINE OF ALL REDUCER AND SAGA FILES
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducers from './root.reducer';
import rootSagas from './root.saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// IMPORT THE SAGA MIDDLEWARE FUNCTION
const sagaMiddleware = createSagaMiddleware();
const persistConfig =
{
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['CartReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

// COMBINE THE SAGAG FILE WITH MIDDLEWARE
const middleware: any = [createLogger({ collapsed: true }), sagaMiddleware];

// USE THE REDUX WINDOW EXTENSION FOR SEEING THE OUTPUT
const composeEnhancers: any = { shouldHotReload: true }

// COBINE THE ROOT REDUCER WITH STORE APPLY MIDDLEWARE
const store: any = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSagas);
const persistor = persistStore(store);

export {
    persistor,
    store
}