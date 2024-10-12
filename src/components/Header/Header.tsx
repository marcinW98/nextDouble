"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { logout } from "@/utils/logout";
import { headerButtons } from "./utils";

export const Header = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const { header, header__wrapper, header__button } = styles;
  const { home, signin, signout } = headerButtons;
  return (
    <>
      <header className={header}>
        <div className={header__wrapper}>
          <Link className={header__button} href={home.path}>
            {home.title}
          </Link>
          {isAuthenticated ? (
            <button className={header__button} onClick={logout}>
              {signout.title}
            </button>
          ) : (
            <Link className={header__button} href={signin.path}>
              {signin.title}
            </Link>
          )}
        </div>
      </header>
    </>
  );
};
