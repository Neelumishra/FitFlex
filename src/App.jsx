import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import Classes from "./pages/Classes/Classes";
import Blog from "./pages/Blog/Blog";
import Registration from "./pages/Registraion/registration";
import Login from "./pages/Login/login";
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/registration" element={<Registration />} />

          <Route path="*" element={<h1>Page Not found</h1>} />
        </Routes>
     
    </div>
  );
}

export default App;
