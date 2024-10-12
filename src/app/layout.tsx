import { ReactNode } from "react";
import { cookies } from "next/headers";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import "../styles/globals.scss";
import { checkLoggedStatus } from "@/utils/checkLoggedStatus";

export const metadata = {
  title: "Hello Next",
  description: "Tasks",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const browserCookies = cookies();
  const token = browserCookies.get("token");
  const isAuthenticated = token !== undefined;

  return (
    <html lang="pl">
      <head></head>
      <body>
        <Header isAuthenticated={isAuthenticated} />
        <Main isAuthenticated={isAuthenticated}>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}

// checkLoggedStatus()
//   .then((loginStatus) => {
//     console.log("Login Status:", loginStatus);
//   })
//   .catch((error) => {
//     console.error("Error getting login status:", error);
//   });
