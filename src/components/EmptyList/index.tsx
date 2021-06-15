import React from "react";
import ActionButton from "../ActionButton";
import styles from "./styles.module.scss";

type EmptyProps = {
  open?: boolean;
  setOpen?: Function;
};

export function EmptyList({ open, setOpen }: EmptyProps) {
  return (
    <div className={styles.empty}>
      <div className={styles.book}>
        <img src="./ic-book.svg" alt="" />
      </div>
      <div className={styles.message}>
        <span>Nenhum contato foi criado ainda.</span>
      </div>
      <ActionButton open={open} setOpen={setOpen} />
    </div>
  );
}
