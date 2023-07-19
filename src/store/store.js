import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currentMonthReducer from './features/currentMonthSlice';
import  userSlice  from './features/users/users.slice';

const reducers = combineReducers({
    monthSetter: currentMonthReducer,
    user: userSlice,

})

export const store = configureStore({
    reducer: reducers,
})

