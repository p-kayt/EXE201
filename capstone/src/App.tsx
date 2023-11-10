import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "swiper/css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Hearder from "./components/header/Hearder";
import { UserProvider } from "./context/userContext";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        {/* <TempComponent /> */}
        <Hearder />
        <Outlet />
        <Footer />
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </QueryClientProvider>
  );
}

export default App;
