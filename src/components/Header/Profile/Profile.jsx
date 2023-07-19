import { useDispatch, useSelector } from "react-redux";
import styles from "./Profile.module.scss";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../data";
import { logOut} from "../../../store/features/users/users.slice";
import { getUserWithGoogle } from "../../../store/features/users/user.actions";

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const provider = new GoogleAuthProvider();

    const loginWithGoogle = async() => {
        if( !user || user == {}){
            dispatch(getUserWithGoogle())   
        }
             
    }

    const logOutFromAccount = async() => {
        await signOut(auth).then(() => {
            dispatch(logOut());
          }).catch((error) => {
            console.log(error);
          });
    }

    return ( 
        <div className={styles.profile}>
            <div className={styles.avatar}>
                <img width='50px' height='50px'src={user ? user.photo : 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'} alt={user ? user.name : 'avatar'} />
            </div>
            <button 
                onClick={loginWithGoogle} 
                style={{ width: '50px', height: '10px', backgroundColor: 'red' }}
            >
                Login Google
            </button>
            <button onClick={logOutFromAccount} style={{ width: '50px', height: '10px', backgroundColor: 'blue' }}>Logout</button>
        </div>
     );
}
 
export default Profile;