import {configureStore, combineReducers} from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';

const rootReducer = combineReducers({
    user: userReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})