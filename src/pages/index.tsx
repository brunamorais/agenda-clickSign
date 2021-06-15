import { useState } from "react";
import ContactList from "../components/ContactList";
import { EmptyList } from "../components/EmptyList";
import Header from "../components/Header";
import Modal from "../components/Modal";
import ActionButton from "../components/ActionButton";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <Header open={open} setOpen={setOpen} contacts={contacts} />

      {contacts.length > 0 ? (
        <ContactList contacts={contacts} setContacts={setContacts} />
      ) : (
        <EmptyList open={open} setOpen={setOpen} />
      )}

      <Modal
        open={open}
        setOpen={setOpen}
        contacts={contacts}
        setContacts={setContacts}
      />
    </div>
  );
}
