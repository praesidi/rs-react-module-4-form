import type { FormEvent } from "react";
import styles from "./sign-up.module.css";
import Input from "../../components/input/input";

export const SignUp = () => {
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
      <form onSubmit={handleSubmit} className={styles["form"]}>
        <Input type="text" name="name" />
        <Input type="text" name="nickname" />
        <Input type="email" name="email" />
        <div className={styles["gender-select"]}>
          <Input type="radio" value="male" name="gender" label="муж" />
          <Input type="radio" value="female" name="gender" label="жен" />
        </div>
        <Input type="password" name="password" />
        <Input type="password" name="password2" />
        <button type="submit" className="button">
          Войти
        </button>
      </form>
    </div>
  );
};
