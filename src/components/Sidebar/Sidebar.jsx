import Categories from "./Categories/Categories";
import MonthCalendar from "./MonthCalendar/MonthCalendar";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return ( 
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <i className='bx bx-spa'></i>
                TO-DOist
            </div>
            <button className={styles.createButton}>
                <i className='bx bx-calendar-plus'></i>
                 + create
            </button>

            <MonthCalendar />
            <Categories />
            <UpcomingEvents />
        </div>
     );
}
 
export default Sidebar;