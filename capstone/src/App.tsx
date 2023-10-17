import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TempComponent from "./pages/TempComponent";
import { Outlet } from "react-router-dom";
import Hearder from "./components/header/Hearder";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <TempComponent /> */}
      <Hearder />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
