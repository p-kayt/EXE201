import "./App.css";
import { Outlet } from "react-router-dom";
import Hearder from "./components/header/Hearder";
import Footer from "./components/footer/Footer";

function App() {

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
