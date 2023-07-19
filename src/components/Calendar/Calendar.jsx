import styles from "./Calendar.module.scss";
import GetMonthButtons from "../UI/getMonthButtons";
import { eachDayOfInterval, parse, endOfMonth, endOfWeek, format, formatDistance, isSameMonth, startOfMonth, startOfToday, startOfWeek, subDays, isEqual, isToday, isWeekend, parseISO, isSameDay } from 'date-fns';
import { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../App";
import { setCurrentMonth } from "../../store/features/currentMonthSlice";
import { useDispatch, useSelector } from "react-redux";

const Calendar = () => {

    const currentMonth = useSelector(state => state.monthSetter.currentMonth);
    const dispatch = useDispatch();
    
    const today = startOfToday();
    const [ selectedDay, setSelectedDay ] = useState(today);
    //const { currentMonth, setCurrentMonth } = useContext( CurrentMonthContext );
    //const { firstDayCurrentMonth } = useContext( FirsDayMonthContext );
    const { notes, setNotes } = useContext( NotesContext);
    const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

    let currentDays = eachDayOfInterval(
        { 
            start: startOfWeek(firstDayCurrentMonth, {weekStartsOn: 1}), 
            end: endOfWeek(endOfMonth(firstDayCurrentMonth), {weekStartsOn: 1}),
        }
    )
    //console.log(format(startOfWeek(startOfMonth(today), {weekStartsOn: 1}), 'EEE'))

    const weekdays = [
        'mon',
        'tue',
        'wed',
        'thu',
        'fri',
        'sat',
        'sun'
    ];

    const getToday = () => {
        setSelectedDay(today);
        dispatch(setCurrentMonth());
    }

    return ( 
        <div className={styles.calendarWrapper}>
            <div className={styles.calendarHeader}>
                <div className={styles.calenderMonthBtns}>
                    <GetMonthButtons />
                </div>

                <button 
                    className={styles.todayBtn}
                    onClick={() => getToday()}
                >
                    Today
                </button>

                <div className={styles.options}>
                    <select>
                        <option>Year</option>
                        <option>Month</option>
                        <option>Week</option>
                        <option>Day</option>
                    </select>    
                </div>
            </div>

            <div className={styles.weekdays}>
                {weekdays && weekdays.map(d => (
                    <div key={d}>{d}</div>
                ))}
            </div>
            <div className={styles.calendar}>

                {currentDays.length > 0 && currentDays.map((day, i) => (
                    <div
                        style={{
                            border: (format(day, 'd L yyyy') == format(selectedDay, 'd L yyyy')) 
                                    ? '1px solid blue' 
                                    : '',
                            color: isSameMonth(day, firstDayCurrentMonth) ? '#000' : '#b8b8b8',
                            //color: isWeekend(day) ? 'red' : '#b8b8b8'',
                            backgroundColor: isToday(day) ? '#f1f0f0' : '',
                        }}
                        className={styles.calendarCell} 
                        key={day.toString()}
                        onClick={() => setSelectedDay(day)}
                    > 
                            {format(day, 'd')}
                            {notes.length > 0 && notes.some(n => 
                                    isSameDay(parseISO(n.startDateTime), day)
                                ) && (
                                    <div className={styles.noteDot}></div>
                                )
                            }
                            
                    </div>
                ))}   
            </div>
        </div>
     );
}
 
export default Calendar;