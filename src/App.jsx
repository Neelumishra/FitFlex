import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Classes from "./pages/classes/Classes";
import PricingPage from "./pages/Pricing/PricingPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return <div className="App">
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/AboutUs" element={<AboutUs/>}/>
    <Route path="/classes" element={<Classes/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path ="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
  </div>;
}

export default App;
