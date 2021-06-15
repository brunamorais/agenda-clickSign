import React, { useState } from "react";
import styles from "./styles.module.scss";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton from "../ActionButton";
import ContactList from "../ContactList";
import { EmptyList } from "../EmptyList";

type ContactProps = {
  nome?: string;
  email?: string;
  tel?: string;
};

type HeaderProps = {
  open?: boolean;
  setOpen?: Function;
  contacts?: ContactProps[];
  setContacts?: Function;
};

export default function Header({
  open,
  setOpen,
  contacts,
  setContacts,
}: HeaderProps) {
  // const [search, setSearch] = useState("");
  // console.log(search);

  // const handleShowContact = (nameParam: string) => {
  //   const newContacts = contacts.filter((contact) => {
  //     return contact.nome === nameParam;
  //   });

  // setContacts(newContacts);
  //};

  return (
    <header>
      <div className={styles.header}>
        <img src="./ic-logo.svg" alt="logo" />

        {contacts?.length > 0 && <ActionButton open={open} setOpen={setOpen} />}

        {console.log(contacts)}

        <div className={styles.input}>
          <input
            size={120}
            type="text"
            id="search-bar"
            placeholder="Buscar..."
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
          />

          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </div>
      </div>
    </header>
  );
}
