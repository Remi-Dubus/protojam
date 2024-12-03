import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
