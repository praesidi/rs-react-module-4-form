import type { FormEvent } from "react";
import Input from "../../components/input/input";
import styles from "./sign-in.module.css";

export const SignIn = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    console.log({
      login: form.get("email") as string,
      password: form.get("password") as string,
    });
  };

  return (
    <div className={styles["wrapper"]}>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          variant="filled"
          placeholder="email"
          radius="xs"
          with_asterisk
          label="email"
        />
        <Input type="password" name="password" placeholder="password" />
        <button type="submit" className="button">
          Войти
        </button>
      </form>
    </div>
  );
};
