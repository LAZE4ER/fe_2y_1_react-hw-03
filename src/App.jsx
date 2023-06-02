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
function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
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

        <h1>Find contacts by name</h1>
        <TextField type="text" onChange={(e) => setFilter(e.target.value)} />
      </Paper>
    </Container>
  );
}

export default App;
