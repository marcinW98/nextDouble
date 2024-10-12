import React from "react";
import style from "./index.module.scss";
import { TasksMenu } from "../TasksMenu";

const { main, main__contentWithTasks, main__contentWithoutTasks } = style;

export const Main = ({ isAuthenticated, children }: { isAuthenticated: boolean; children: React.ReactNode }) => {
  return (
    <main className={main}>
      {isAuthenticated && <TasksMenu />}
      <div className={isAuthenticated ? main__contentWithTasks : main__contentWithoutTasks}>{children}</div>
    </main>
  );
};
