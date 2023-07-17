import { useContext, useEffect, useState } from "react";
import styles from "./Categories.module.scss";
import { CategoriesContext, NotesContext, FilterCatContext } from "../../../App";

const Categories = () => {
    const { notes, setNotes } = useContext(NotesContext);
    const { categories, setCategories } = useContext(CategoriesContext);
    const { filteredCategories, setFilteredCategory } = useContext(FilterCatContext);
    const [ catArray, setCatArray ] = useState([]);

    const filterNotesCategory = () => {
        let filter = [];
        if(filteredCategories.length > 0) {
            filter = filteredCategories;
        }
        if(event.target.checked){
            if(notes.length > 0 && notes.some(c => c.category == event.target.value)){
                filter = notes.filter(note => {
                    if(note.category === event.target.value){
                        return note
                    }
                })
            }
            if(filteredCategories.length <= 0){
                setFilteredCategory(filter);
            }else{
                setFilteredCategory(old => [ ...old, ...filter]);                
            }
        }else{
            if(filteredCategories.length > 0 && notes.length > 0 && notes.some(c => c.category == event.target.value)){

                filter = []
                filter = filteredCategories.filter(note => {
                    if( note.category !== event.target.value){
                        return note
                    }
                })
                console.log(filter)
            }
            setFilteredCategory(filter);  
        }              
        
        //debugger
    }


    return ( 
        <div className={styles.categories}>
            <h5>Categories</h5>
            {categories.length > 0 &&
                categories.map(cat => {
                    return (
                        <div className={styles.catWrapper}>
                            <div className={styles.catWrapper}>
                                <input
                                    name="categories"
                                    value={cat.cat}
                                    style={{ accentColor: cat.color }}
                                    type="checkbox"
                                    id={cat.cat}
                                    onChange={filterNotesCategory} 
                                />
                                <label
                                    style={{ color: cat.color }}
                                    for={cat.cat}>
                                    {cat.cat}
                                </label>
                            </div>
                        </div>
                    );
                })}

            {/* <button className={styles.addCategory}>...add category</button> */}
        </div>
     );
}
 
export default Categories;