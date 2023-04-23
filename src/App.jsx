import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom"
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Classes from "./pages/classes/Classes";
import PricingPage from "./pages/Pricing/PricingPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import React from "react"

function App() {
  
  const location = useLocation()
  React.useEffect(()=>{
    window.scrollTo({top:0})
  },[location])

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
   <Footer/>
  </div>;
}

export default App;
