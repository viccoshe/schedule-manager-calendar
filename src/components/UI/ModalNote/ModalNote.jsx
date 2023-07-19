import { format, startOfToday, startOfYear } from "date-fns";
import styles from "./ModalNote.module.scss";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import { setNote } from "../../../store/features/users/users.slice";

const ModalNote = ({ modalNote, setModalNote }) => {
    const dispatch = useDispatch();
    
    const user = useSelector(state => state.user.user);


    const { categories, setCategories } = useContext(CategoriesContext);

    let today = startOfToday();
    console.log(format(today, 'd LLLL yyyy'));

    // let days = eachDayOfInterval(
    //     { 
    //         start: startOfYear(firstDayCurrentMonth, {weekStartsOn: 1}), 
    //         end: endOfYear(endOfMonth(firstDayCurrentMonth), {weekStartsOn: 1}),
    //     }
    // )


    const getDate = (e) => {
        console.log(e);

    }

    const submitFormData = (e) => {
        e.preventDefault;
        console.log(e);
        const data = new FormData(e.target);
        const text = data.get('text');
        const category = data.get('category');
        const note = {
            // name: user.name,
            // imageUrl: user.photo,
            category: category,
            title: text,
            startDateTime: today,
        }

        debugger
        if(user){
            dispatch(setNote(note))
        }else{
            alert('Sign in please')
        }


        debugger

    }

    
    return ( 
        <div 
            onClick={() => setModalNote(!modalNote)}
            className={styles.modalWrapper}
        >
            <div onClick={e => e.stopPropagation()} 
                className={styles.modal}
            >
                <i 
                    onClick={() => setModalNote(!modalNote)}
                    className='bx bx-x'
                ></i>
                <div 
                    className={styles.form}
                    onSubmit={(e) => submitFormData(e)}
                >
                    <form action="">
                        <label htmlFor="note">Write your note</label>
                        <textarea id="note" name="text" rows="5" cols="33"></textarea>
                        <div
                            name="time" 
                            className={styles.modalDate} 
                            onClick={(e) => getDate(e)} 
                        >
                            {format(today, 'd LLLL yyyy')}
                        </div>
                        <div className={styles.modalCategory}>
                            <select name="category" id="">
                                {categories.length > 0 && categories.map(cat => (
                                        <option key={cat.color} value={cat.cat}>
                                            {cat.cat}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <button 
                            className={styles.noteBtn} 
                            type="submit"
                        >
                            Add note
                        </button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default ModalNote;