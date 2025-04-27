import { useDispatch, useSelector } from 'react-redux';
 import { selectContacts, selectError, selectLoading } from '../../../redux/contacts/selectors';
 import { useEffect } from 'react';
 import { fetchContacts } from '../../../redux/contacts/operations';
 import ContactList from '../../ContactList/ContactList';
 import ContactForm from '../../ContactForm/ContactForm';
 import SearchBox from '../../SearchBox/SearchBox';
 
 export default function ContactsPage() {
   const dispatch = useDispatch();
   const contacts = useSelector(selectContacts);
   const isLoading = useSelector(selectLoading);
   const isError = useSelector(selectError);
 
   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);
   return (
     <div>
       <h1>Phonebook</h1>
       <ContactForm />
       <SearchBox />
       {isLoading && <p>Loading...</p>}
       {isError !== null && <p>Something went wrong...</p>}
       {contacts.length > 0 && <ContactList />}
     </div>
   );
 }