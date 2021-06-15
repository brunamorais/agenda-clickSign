import { useState, useEffect } from "react";
import {
  createStyles,
  Divider,
  makeStyles,
  Modal,
  Theme,
} from "@material-ui/core";
import styles from "./styles.module.scss";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
type ContactProps = {
  nome?: string;
  email?: string;
  telefone?: string;
};

type ModalDeleteProps = {
  open?: boolean;
  setOpen?: Function;
  contacts?: ContactProps[];
  setContacts?: Function;
};

const ModalDelete = ({
  open,
  setOpen,
  contacts,
  setContacts,
}: ModalDeleteProps) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const handleDelContact = (nameParam: string) => {
    const newContacts = contacts.filter((contact) => {
      return contact.nome !== nameParam;
    });

    setContacts(newContacts);
  };

  return (
    <></> /*
    <Modal
      open={open}
      // onClose={setOpen(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <div className={styles.modalContent}>
          <div className={styles.title}>
            <span>Excluir contato</span>
          </div>
          <Divider />

          <p>Deseja realmente excluir o contato?</p>
        </div>
      </div>
      <Divider />
      <div className={styles.btnModal}>
        <button className={styles.btnCancel} onClick={() => setOpen(false)}>
          Cancelar
        </button>
        <button
          type="submit"
          disabled={!nome && !email && !tel}
          className={styles.btnDel}
          // onClick={() => {
          //   handleDelContact();
          // }}
        >
          Salvar
        </button>
      </div>
    </Modal>*/
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 432,
      height: 201,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderRadius: 16,
    },
  })
);

export default ModalDelete;
