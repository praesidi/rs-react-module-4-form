import type { InputHTMLAttributes } from "react";
import styles from "./checkbox.module.css";

export const Checkbox = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.checkbox_wrapper}>
      <input
        type="checkbox"
        className={styles.input}
        {...props}
      />
    </div>
  );
};
