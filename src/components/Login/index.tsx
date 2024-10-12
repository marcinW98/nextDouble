"use client";

import styles from "./rwd.module.scss";
import { useLogin } from "./useLogin";

const { form, form__title, form__field, form__submitButton, labelText, inputText } = styles;

export const LoginPage = () => {
  const { username, password, handleEmailChange, handlePasswordChange, handleSubmit, error } = useLogin();

  return (
    <div className={form}>
      <h2 className={form__title}>Login</h2>
      <form>
        <div className={form__field}>
          <label htmlFor="email" className={labelText}>
            Email:
          </label>
          <input id="email" className={inputText} type="text" value={username} onChange={handleEmailChange} />
        </div>
        <div className={form__field}>
          <label htmlFor="password" className={labelText}>
            Password:
          </label>
          <input id="password" className={inputText} type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className={form__submitButton} type="button" onClick={handleSubmit}>
          Sign In
        </button>

        <p>{error}</p>
      </form>
    </div>
  );
};
