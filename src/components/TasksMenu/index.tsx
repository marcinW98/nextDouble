import Link from "next/link";
import styles from "./index.module.scss";
import { ratings, passwordInput, infiniteHumanList, intersectionObserver, multistepForm } from "../../../data.json";
const { taskMenu, taskMenu__task } = styles;

export const TasksMenu = () => {
  return (
    <div className={taskMenu}>
      <Link className={taskMenu__task} href={ratings.url}>
        {ratings.title}
      </Link>

      <Link className={taskMenu__task} href={passwordInput.url}>
        {passwordInput.title}
      </Link>

      <Link className={taskMenu__task} href={infiniteHumanList.url}>
        {infiniteHumanList.title}
      </Link>

      <Link className={taskMenu__task} href={intersectionObserver.url}>
        {intersectionObserver.title}
      </Link>
    </div>
  );
};
