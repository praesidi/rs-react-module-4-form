import type { FormEvent } from "react";
import Input from "../../components/input/input";
import styles from "./sign-in.module.css";
import Icon from "../../components/icon/icon";

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
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          variant="outlined"
          placeholder="email"
          radius="sm"
          label="email"
          with_asterisk
          icon={<Icon name={"at"} size="16px"/>}
        />
        
        <Input 
          type="password"
          name="password"
          variant="outlined"
          placeholder="password"
          radius="sm"
          label="password"
        />
        <button type="submit" className={styles.button}>
          Войти
        </button>
      </form>
    </div>
  );
};
