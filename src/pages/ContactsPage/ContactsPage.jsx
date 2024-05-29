import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { selectLoading } from "../../redux/contacts/selectors";
import { selectError } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading, please wait...</p>}
      {error && <p>Oops! An error occured, please reload page.</p>}
      {!isLoading && <ContactList />}
    </div>
  );
}
