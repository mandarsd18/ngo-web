import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Galary from "./Pages/Galary";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Pages/Footer";
import Profile from "./Pages/Profile";


function App() {
  return (
    <>
   <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<>
          <Home /><Footer/>
        </>} />
        <Route path="/about" element={<>
        <About/>
        <Footer/>

        </>}/>
        <Route path="/galary" element={<>
        <Galary/>
        <Footer/></>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<>
        <Dashboard/>
        <Footer/></>}/>
        <Route path="/profile" element={<Profile/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
