import Calendar from "./Calendar/Calendar";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Layout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser, logOut } from "../store/features/users/users.slice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../data";
import ModalNote from "./UI/ModalNote/ModalNote";
import { getUserWithGoogle } from "../store/features/users/user.actions";

const Layout = () => {

    const [ modalNote, setModalNote ] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)

     useEffect(() => {
        if( !user ){
            onAuthStateChanged(auth, (loggedUser) => {
            if (loggedUser) {
                let user = {
                    id: loggedUser.uid,
                    name: loggedUser.displayName,
                    notes: [],
                    photo: loggedUser.photoURL,
                }
                dispatch(getLoggedUser(user));
            }else {
                dispatch(logOut());
                console.log('user is signed out')
            }
            });        
        }
     })
     

    return (
        <div className={styles.layout}>
            <div 
                // style={{
                //     width: '100%'
                // }}
                className={styles.sidebarWrapper}
            > 
                <Sidebar 
                    modalNote={ modalNote } 
                    setModalNote={ setModalNote } 
                /> 
            </div>
            <main className={styles.main}>
                <Header />
                <Calendar />
            </main>
            {modalNote ?
                <ModalNote
                    modalNote={ modalNote } 
                    setModalNote={ setModalNote } 
                />
            :
            ''
            }
        </div>
     );
}
 
export default Layout;