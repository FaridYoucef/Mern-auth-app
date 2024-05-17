import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./screens/Register";
import Login from "./screens/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/signup" element={< Register/>} />
          <Route path="/signin" element={< Login/>} />
        </Routes>
       
      </>
    </BrowserRouter>
  );
  
};

export default App;
