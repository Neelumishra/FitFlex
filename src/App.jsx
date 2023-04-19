import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Classes from "./pages/classes/Classes";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MoreAboutUs from "./pages/about/MoreAboutUs";
function App() {
  return <div className="App">
    {/* <Navbar/> */}
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    {/* <Switch> */}
      <Route path="/AboutUs" element={<AboutUs/>}>
        {/* <MoreAboutUs/> */}
      </Route>
    {/* </Switch> */}
   
    
    <Route path="/classes" element={<Classes/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path ="/register" element={<Register/>}/>

   </Routes>
  </div>;
}

export default App;
