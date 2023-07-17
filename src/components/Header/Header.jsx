import styles from "./Header.module.scss";
import Profile from "./Profile/Profile";

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.search}>
                <i className='bx bx-search-alt'></i>
                <input 
                    type="text" 
                    placeholder='Search Appointments, Staffs, etc..'
                    //onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <Profile/>
        </header>
     );
}
 
export default Header;