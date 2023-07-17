import styles from "./MonthCalendar.module.scss";
import GetMonthButtons from "../../UI/getMonthButtons";

const MonthCalendar = () => {
    return ( 
        <div className={styles.monthCalendar}>
            <div className={styles.monthHeader}>
                <GetMonthButtons/>
  
            </div>
        </div>
     );
}
 
export default MonthCalendar;