import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import { Outlet } from "react-router-dom";
import Hearder from "./components/header/Hearder";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

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
