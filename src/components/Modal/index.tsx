import { useState, useEffect } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

type ModalProps = {
  open?: boolean;
  setOpen?: Function;
  contacts?: ContactProps[];
  setContacts?: Function;
};

const ModalScreen = ({ open, setOpen, contacts, setContacts }: ModalProps) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const handleAddContact = () => {
    const newContact = {
      nome,
      email,
      tel: tel,
    };

    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
  };

  return (
    <Modal
      open={open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <div className={styles.modalContent}>
          <div className={styles.title}>
            <span>Criar novo contato</span>
          </div>
          <Divider />
          <div className={styles.formModal}>
            <div className={styles.nome}>
              <p>Nome</p>
              <input
                name="nome"
                className={styles.inputName}
                type="text"
                onChange={(e) => {
                  setNome(e.target.value);
                }}
                value={nome}
              />
            </div>
            <div className={styles.email}>
              <p>E-mail</p>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className={styles.tel}>
              <p>Telefone</p>

              <input
                type="tel"
                name="tel"
                onChange={(e) => {
                  setTel(e.target.value);
                }}
                value={tel}
              />
            </div>
          </div>
          <Divider />
          <div className={styles.btnModal}>
            <button
              className={styles.btnCancel}
              onClick={() => {
                setOpen(false);
                setNome("");
                setEmail("");
                setTel("");
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={!nome && !email && !tel}
              className={styles.btnSave}
              onClick={() => {
                handleAddContact();
                setOpen(false);
                setNome("");
                setEmail("");
                setTel("");
              }}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 432,
      height: 342,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderRadius: 16,
    },
  })
);

export default ModalScreen;
