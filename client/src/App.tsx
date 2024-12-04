import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import type { charactersType } from "./assets/lib/definitions";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";

function App() {
  // type de setCardValue
  type SetCard = React.Dispatch<React.SetStateAction<charactersType | null>>;

  // état de la carte recherchée dans la barre
  const [cardValue, setCardValue]: [charactersType | null, SetCard] =
    useState<charactersType | null>(null);

  return (
    <>
      <Header />
      <NavBar setCardValue={setCardValue} />
      <Outlet context={cardValue && cardValue} />
      <Footer />
    </>
  );
}

export default App;
