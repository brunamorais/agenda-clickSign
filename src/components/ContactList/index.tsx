import styles from "./styles.module.scss";
import React, { useState } from "react";
import ActionButton from "../ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

type ContactProps = {
  nome?: string;
  email?: string;
  tel?: string;
};

type ContactListProps = {
  contacts?: ContactProps[];
  setContacts?: Function;
};

const ContactList = ({ contacts, setContacts }: ContactListProps) => {
  return (
    <div className={styles.listContainer}>
      <table className={styles.List}>
        <tr className={styles.listHeader}>
          <th className={styles.headerContact}>Contatos</th>
          <th className={styles.headerEmail}>E-mail</th>
          <th className={styles.headerTel}>Telefone</th>
        </tr>
        {contacts.length > 0 && (
          <>
            {contacts.map((contact: ContactProps) => {
              return (
                <tr className={styles.newLine}>
                  <td>{contact.nome}</td>
                  <td>{contact.email}</td>
                  <td>{contact.tel}</td>
                  <td width="1rem" className={styles.icon}>
                    <FontAwesomeIcon
                      className={styles.iconEdit}
                      icon={faPenAlt}
                    />
                  </td>
                  <td width="1rem" className={styles.icon}>
                    <FontAwesomeIcon
                      className={styles.iconTrash}
                      icon={faTrash}
                    />
                  </td>
                </tr>
              );
            })}
          </>
        )}
      </table>
    </div>
  );
};
export default ContactList;
