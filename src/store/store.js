import { configureStore } from '@reduxjs/toolkit';
import currentMonthReducer from './features/currentMonthSlice';

export const store = configureStore({
    reducer: {
        monthSetter: currentMonthReducer,
    },
    devTools: true,
})

