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

type ActionProps = {
  open?: boolean;
  setOpen?: Function;
};

const ActionButton = ({ open, setOpen }: ActionProps) => {
  const [modalStyle] = useState(getModalStyle);

  return (
    <div className={styles.buttonPlus}>
      <div className={styles.modal}>
        <button className={styles.modalContent} onClick={() => setOpen(true)}>
          <FontAwesomeIcon className={styles.icon} icon={faPlus} />
          Criar contato
        </button>
      </div>
    </div>
  );
};

{
}

export default ActionButton;
