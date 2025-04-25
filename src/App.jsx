import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import './App.css';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { selectContacts, selectError, selectLoading } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

export default App;