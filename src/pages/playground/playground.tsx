import { useState } from "react";
import styles from "./playground.module.css";
import Input from "../../components/input/input";
import { Checkbox } from "../../components/checkbox/checkbox";

const sizeValues = {
  "1": "xs",
  "2": "sm",
  "3": "md",
  "4": "lg",
  "5": "xl",
};

export const Playground = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [inputProps, setInputProps] = useState<any>({
    placeholder: "placeholder",
    label: "label",
    error: "error",
    description: "description",
    variant: "outlined",
    radius: "2",
    size: "2",
    disabled: false,
    with_asterisk: false,
    is_password: false,
  });

  console.log("rerender");

  const handleChange = (name: string, value: string | boolean) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setInputProps((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.input_wrapper}>
        <Input
          placeholder={inputProps.placeholder}
          label={inputProps.label}
          error={inputProps.error}
          description={inputProps.description}
          variant={inputProps.variant}
          radius={sizeValues[inputProps.radius as keyof object]}
          size={sizeValues[inputProps.size as keyof object]}
          disabled={inputProps.disabled}
          with_asterisk={inputProps.with_asterisk}
          type={inputProps.is_password ? "password" : ""}
        />
      </div>
      <div className={styles.menu_wrapper}>
        {/* placeholder */}
        <label className={styles.label}>
          <span>placeholder</span>
          <input
            type="text"
            name="placeholder"
            value={inputProps.placeholder}
            onChange={(e) => handleChange("placeholder", e.target.value)}
          />
        </label>
        {/* label */}
        <label className={styles.label}>
          <span>label</span>
          <input
            type="text"
            name="label"
            value={inputProps.label}
            onChange={(e) => handleChange("label", e.target.value)}
          />
        </label>
        {/* description */}
        <label className={styles.label}>
          <span>description</span>
          <input
            type="text"
            name="description"
            value={inputProps.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </label>
        {/* error */}
        <label className={styles.label}>
          <span>error</span>
          <input
            type="text"
            name="error"
            value={inputProps.error}
            onChange={(e) => handleChange("error", e.target.value)}
          />
        </label>
        {/* variant */}
        <label className={styles.label}>
          <span>variant</span>
          <select
            name="variant"
            value={inputProps.variant}
            onChange={(e) => handleChange("variant", e.target.value)}
          >
            <option value="outlined">outlined</option>
            <option value="filled">filled</option>
            <option value="underlined">underlined</option>
            <option value="borderless">borderless</option>
          </select>
        </label>
        {/* radius */}
        <label className={styles.label}>
          <span>radius</span>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={inputProps.radius}
            onChange={(e) => handleChange("radius", e.target.value)}
            // onChange={(e) => console.log(e.target.value)}
          />
        </label>
        {/* size */}
        <label className={styles.label}>
          <span>size</span>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={inputProps.size}
            onChange={(e) => handleChange("size", e.target.value)}
          />
        </label>
        {/* disabled */}
        <label className={styles.label}>
          <span>disabled</span>
          <Checkbox
            checked={inputProps.disabled}
            onChange={(e) => handleChange("disabled", e.target.checked)}
          />
        </label>
        {/* with asterisk */}
        <label className={styles.label}>
          <span>with asterisk</span>
          <Checkbox
            checked={inputProps.with_asterisk}
            onChange={(e) => handleChange("with_asterisk", e.target.checked)}
          />
        </label>
        {/* is password */}
        <label className={styles.label}>
          <span>is password</span>
          <Checkbox
            checked={inputProps.is_password}
            onChange={(e) => handleChange("is_password", e.target.checked)}
          />
        </label>
      </div>
    </div>
  );
};
