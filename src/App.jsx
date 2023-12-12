import { nanoid } from "nanoid";
import { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import ContactList from "./components/ContactList";
import CreateContactForm from "./components/CreateContactForm";
function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  function createContact() {
    const newContact = {
      name: name,
      id: nanoid(),
      number: number,
    };
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  }
  function removeContact() {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    createContact();
  }
  function filterContacts() {
    const filteredContacts = contacts.filter((contact) => {
      return contact.name.includes(filter);
    });
    return filteredContacts;
  }

  return (
    <Container>
      <Typography variant="h3">Phonebook</Typography>
      <Paper
        elevation={5}
        sx={{
          padding: "18px",
        }}
      >
        <ContactList contacts={filterContacts()} />
        <CreateContactForm />
        <h1>Find contacts by name</h1>
        <TextField type="text" onChange={(e) => setFilter(e.target.value)} />
      </Paper>
    </Container>
  );
}

export default App;
