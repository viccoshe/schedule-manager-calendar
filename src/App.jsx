import { useState, createContext} from "react";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./store/store";
export const NotesContext = createContext([]);
export const CategoriesContext = createContext([]);
export const FilterCatContext = createContext([]);

function App() {
  const [ categories, setCategories ] = useState (
    [
      {
        cat: 'Business',
        color: 'red'
      },
      {
        cat: 'Work',
        color: 'blue'
      },
      {
        cat: 'Personal',
        color: 'green'
      },
      {
        cat: 'Birthday',
        color: 'yellow'
      },
      {
        cat: 'Event',
        color: 'purple'
      },
      {
        cat: 'Meeting',
        color: 'tomato'
      },
    ]
  );
  const [ notes, setNotes ] = useState([
    {
      name: 'Sasha Still',
      imageUrl: 'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
      category: 'Birthday',
      title: 'Meeting',
      startDateTime: '2023-07-25T13:00',
      endDateTime: '2023-07-21T14:30',

    },
    {
      name: 'Andrei Still',
      imageUrl: 'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
      category: 'Personal',
      title: 'Dinner',
      startDateTime: '2023-07-10T13:00',
      endDateTime: '2023-07-10T14:30',

    },
    {
      name: 'Andrei Still',
      imageUrl: 'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
      category: 'Business',
      title: 'Dinner',
      startDateTime: '2023-07-23T13:00',
      endDateTime: '2023-07-23T14:30',

    },
    {
      name: 'Andrei Still',
      imageUrl: 'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
      category: 'Work',
      title: 'Dinner',
      startDateTime: '2023-07-19T13:00',
      endDateTime: '2023-07-19T14:30',

    },
    {
      name: 'Sasha Still',
      imageUrl: 'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
      category: 'Birthday',
      title: 'Meeting',
      startDateTime: '2023-07-11T13:00',
      endDateTime: '2023-07-21T14:30',

    },
    {
      name: 'Sasha Still',
      imageUrl: 'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
      category: 'Business',
      title: 'Meeting',
      startDateTime: '2023-07-21T13:00',
      endDateTime: '2023-07-21T14:30',

    },
  ]);

  const [ filteredCategories, setFilteredCategory ] = useState([]);
  console.log(filteredCategories)




  return (
    <>
    <Provider store={store}>
      <FilterCatContext.Provider value={{ filteredCategories, setFilteredCategory }}>
          <CategoriesContext.Provider value = {{ categories, setCategories }}>
            <NotesContext.Provider value={{ notes, setNotes }}>
                    <Layout />
              </NotesContext.Provider>
          </CategoriesContext.Provider>
        </FilterCatContext.Provider>
    </Provider>
    </>
  )
}

export default App
