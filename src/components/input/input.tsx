/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, type ChangeEvent, type ReactNode } from "react";
import styles from "./input.module.css";
import Icon from "../icon/icon";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

type Variant = "outlined" | "filled" | "borderless" | "underlined";

interface Props {
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  description?: string;
  error?: string;
  variant?: Variant;
  radius?: Size;
  size?: Size;
  disabled?: boolean;
  with_asterisk?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => unknown;
  icon?: ReactNode;
  className?: string;
}

export const Input = ({
  type = "text",
  id,
  name,
  placeholder,
  label,
  value,
  description,
  error,
  variant = "outlined",
  radius = "md",
  size = "md",
  disabled,
  with_asterisk,
  onChange,
  icon,
  className = "",
}: Props) => {
  const [inputType, setInputType] = useState(type);
  const inputID = id ? id : `input-${type}`;

  const togglePasswordDisplay = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div
      className={`${styles.root} ${error != "" && styles.error}`}
      data-size={size}
    >
      {/* Input label and description */}
      {label ? (
        <label
          className={styles.label}
          htmlFor={inputID}
        >
          {label}
          <span className={styles.asterisk}>{with_asterisk ? " *" : ""}</span>
        </label>
      ) : null}
      <p className={styles.description}>{description}</p>

      {/* Input and its wrapper */}
      <div className={`${styles.input_wrapper} ${className}`}>
        {icon ? <div className={styles.icon_wrapper}>{icon}</div> : null}
        <input
          type={inputType}
          id={inputID}
          name={name}
          value={value}
          className={styles.input}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          data-variant={variant}
          data-radius={radius}
        />
        {type === "password" ? (
          <div className={styles.show_password_button_wrapper}>
            <button
              className={styles.show_password_button}
              onClick={togglePasswordDisplay}
            >
              <Icon
                name={inputType === "password" ? "eye" : "eye-off"}
                size="18px"
              />
            </button>
          </div>
        ) : null}
      </div>

      {/* Error */}
      <p className={styles.error_message}>{error}</p>
    </div>
  );
};

export default Input;
