import { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  const [themeMode, setTheme] = useState("dark");

  const lightTheme = () => {
    setTheme("light");
  };
  const darkTheme = () => {
    setTheme("dark");
  };
  useEffect(()=>{
  const html =document.querySelector('html');
  html.classList.remove("light","dark");
  html.classList.add(themeMode)
  },[themeMode])
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
