import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Searchbar from "./components/Searchbar";
import {
  addContactAction,
  deleteContactAction,
} from "./redux/contacts/contactsActions";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { selectContacts } from "./redux/contacts/contactSelector";
function App() {
  const contacts = useSelector(selectContacts);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  function createContact(name, number) {
    const newContact = {
      name: name,
      id: nanoid(),
      number: number,
    };

    dispatch(addContactAction(newContact));
  }
  function removeContact() {}
  function handleSubmit(e) {
    e.preventDefault();
    createContact();
  }
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.includes(filter);
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onCreate={createContact} />
      <br />

      <h2>Contacts</h2>

      <Searchbar />

      <ContactsList contacts={filteredContacts} onDelete={removeContact} />
    </div>
  );
}

export default App;
