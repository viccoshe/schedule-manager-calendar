import styles from "./UpcomingEvents.module.scss";
import { NotesContext } from "../../../App";
import { useContext, useEffect, useState } from "react";
import { startOfToday, isFuture, parseISO, closestTo } from "date-fns";

const UpcomingEvents = () => {
    let today = startOfToday();
    const { notes, setNotes } = useContext(NotesContext);
    const [upcomingNotes, setUpcomingNotes ] = useState([]);

    useEffect(() => {
        let filteredNotes;
        if (notes.length > 0){
            filteredNotes = notes.filter((n, i) =>{
                if (isFuture(parseISO(n.startDateTime))){
                    return closestTo(today, notes[i].startDateTime)
                }
            })
        }
        setUpcomingNotes(filteredNotes);
    }, [notes])


    return ( 
        <div className={styles.upcomingEvents}>
            <h5>UpcomingEvents</h5>
            {upcomingNotes.length > 0 && upcomingNotes.map(note => {
                return <div>{note.title}</div>
            })}
        </div>
     );
}
 
export default UpcomingEvents;