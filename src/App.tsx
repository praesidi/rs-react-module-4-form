import { useEffect, useState } from "react";
import "./App.css";
import { SignIn } from "./pages/sign-in/sign-in";
import { SignUp } from "./pages/sign-up/sign-up";
import { Playground } from "./pages/playground/playground";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("playground");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const getPage = () => {
    switch (currentPage) {
      case "sign_in":
        return <SignIn />;

      case "sign_up":
        return <SignUp />;

      case "playground":
        return <Playground />;

      default:
        <p>Page Not Found</p>;
    }
  };

  return (
    <div className="main">
      <h1>{currentPage}</h1>
      <button
        onClick={() => {
          setTheme((prev) => (prev === "dark" ? "light" : "dark"));
        }}
        style={{ marginBottom: "32px" }}
      >
        theme
      </button>
      <div className="tabs">
        <button
          onClick={() => setCurrentPage("playground")}
          className="button"
        >
          Playground
        </button>
        <button
          onClick={() => setCurrentPage("sign_in")}
          className="button"
        >
          SignIn
        </button>
        <button
          onClick={() => setCurrentPage("sign_up")}
          className="button"
        >
          SignUp
        </button>
      </div>
      <div className="page-wrapper">{getPage()}</div>
    </div>
  );
}

export default App;
