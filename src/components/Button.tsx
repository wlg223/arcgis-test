import React from "react";
import * as styles from "../styles/Button.module.scss";

export default function Button({
  text,
  onClick = () => {},
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
}
