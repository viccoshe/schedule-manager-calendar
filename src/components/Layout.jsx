import Calendar from "./Calendar/Calendar";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <div 
                // style={{
                //     width: '100%'
                // }}
                className={styles.sidebarWrapper}
            > 
                <Sidebar /> 
            </div>
            <main className={styles.main}>
                <Header />
                <Calendar />
            </main>
        </div>
     );
}
 
export default Layout;