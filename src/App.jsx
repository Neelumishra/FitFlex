import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Classes from "./pages/classes/Classes";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  return <div className="App">
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/AboutUs" element={<AboutUs/>}/>
    <Route path="/classes" element={<Classes/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path ="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
  </div>;
}

export default App;
