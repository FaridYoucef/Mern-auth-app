import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Home />
      </>
    </BrowserRouter>
  );
  
};

export default App;
