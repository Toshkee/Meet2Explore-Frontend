import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar /> 
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;