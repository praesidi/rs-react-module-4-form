import { useState, type ChangeEvent, type ReactNode } from "react";
import styles from "./input.module.css";
import Icon from "../icon/icon";

type Size = "small" | "default" | "large";
type Radius = "xs" | "sm" | "md" | "lg" | "xl";
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
  radius?: Radius;
  size?: Size;
  disabled?: boolean;
  with_asterisk?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => unknown;
  icon?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Input = ({
  type = "text",
  name,
  placeholder,
  label,
  value,
  description,
  error,
  variant = "outlined",
  radius = "md",
  size = "default",
  disabled,
  with_asterisk,
  onChange,
  icon,
  className = "",
  style
}: Props) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordDisplay = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const iconPaddingCss = icon ? styles.icon_padding : '';
  const inputErrorCss = error ? styles.error : '';
  const borderRadiusCss = variant !== 'underlined' ? styles[`bd_radius_${radius}`] : '';
  const inputCssClasses = `${styles.input} ${iconPaddingCss} ${styles[variant]} ${borderRadiusCss} ${inputErrorCss}`;

  return (
    <div
      className={`${styles.root} ${error != "" && styles.error}`}
      data-size={size}
    >
      {/* Input label and description */}
      { 
        label 
          ? <Label
              text={label}
              with_asterisk={with_asterisk}
            /> 
          : null
      }
      { 
        description
          ? <p className={styles.description}>{description}</p>
          : null
      }

      {/* Input and its wrapper */}
      <div className={`${styles.input_wrapper} ${className}`} style={style}>
        {icon ? <InputIcon icon={icon}/> : null}
        <input
          type={inputType}
          name={name}
          value={value}
          className={inputCssClasses}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
        {type === "password" ? <ShowPasswordButton toggleDisplay={togglePasswordDisplay} inputType={inputType}/> : null}
      </div>

      {/* Error */}
      <p className={styles.error_message}>{error}</p>
    </div>
  );
};

interface LabelProps {
  text: string;
  with_asterisk?: boolean;
}

const Label = ({ text, with_asterisk = false }: LabelProps) => {
  return (
      <div
        className={styles.label}
      >
        {text}
        <span className={styles.asterisk}>{with_asterisk ? " *" : ""}</span>
      </div>
  )
}

interface ShowPasswordButtonProps {
  inputType: React.HTMLInputTypeAttribute;
  toggleDisplay: () => void
}

const ShowPasswordButton = ({ toggleDisplay, inputType }: ShowPasswordButtonProps) => {
  return (
    <div className={styles.show_password_button_wrapper}>
      <button
        type="button"
        className={styles.show_password_button}
        onClick={toggleDisplay}
      >
        <Icon
          name={inputType === "password" ? "eye" : "eye-off"}
          size="18px"
        />
      </button>
    </div>
  );
}

interface InputIconProps {
  icon: ReactNode;
}

const InputIcon = ({ icon }: InputIconProps) => {
  return (
    <div className={styles.icon_container}>
      <div className={styles.icon_wrapper}>
        {icon}
      </div>
    </div>
  );
}

export default Input;
