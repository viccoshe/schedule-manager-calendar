import { useContext } from "react";
import styles from "./GetMonthButtons.module.scss";
import { add, 
        format, 
        parse, 
        startOfToday, 
        sub } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux'
import { setNextMonth, setPreviousMonth } from "../../store/features/currentMonthSlice";

const getMonthButtons = () => {

    const currentMonth = useSelector(state => state.monthSetter.currentMonth)
    const dispatch = useDispatch();

    let today = startOfToday();
    const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());


    return (
            <div className={styles.monthsButtons}>
                <button onClick={() => dispatch(setNextMonth())}>
                    <i className='bx bx-chevron-left'></i>
                </button>
                <span className={styles.date}>{format(firstDayCurrentMonth, 'MMMM yyyy')}</span>
                <button onClick={() => dispatch(setPreviousMonth())}>
                    <i className='bx bx-chevron-right'></i>
                </button>
            </div>           

     );
}
 
export default getMonthButtons;