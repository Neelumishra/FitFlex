import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Classes from "./pages/Classes";
import Blog from "./pages/Blog";
function App() {
  return <div className="App">
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/AboutUs" element={<AboutUs/>}/>
    <Route path="/classes" element={<Classes/>}/>
    <Route path="/blog" element={<Blog/>}/>

   </Routes>
  </div>;
}

export default App;
