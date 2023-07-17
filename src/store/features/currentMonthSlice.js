import { createSlice } from "@reduxjs/toolkit";
import { add, format, parse, startOfToday, sub } from "date-fns";

const today = startOfToday();

const initialState = {
    currentMonth: format(today, 'MMM-yyyy')
}

export const currentMonthSlice = createSlice({
    name: 'currentMonth',
    initialState,
    reducers:  {
        setCurrentMonth: (state) => {state = initialState},
        setNextMonth: (state) => {
            const firstDayCurrentMonth = parse(state.currentMonth, 'MMM-yyyy', new Date());  
            let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
            state.currentMonth = format(firstDayNextMonth, 'MMM-yyyy');
        },
        setPreviousMonth: (state) => {
            const firstDayCurrentMonth = parse(state.currentMonth, 'MMM-yyyy', new Date());  
            let firstDayPrevMonth = sub(firstDayCurrentMonth, { months: 1 });
            state.currentMonth = format(firstDayPrevMonth, 'MMM-yyyy');
        }
    }   
})

export const { setCurrentMonth, setNextMonth, setPreviousMonth } = currentMonthSlice.actions;
export default currentMonthSlice.reducer;


