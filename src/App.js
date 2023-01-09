import { Routes, Route, BrowserRouter as Router, BrowserRouter } from "react-router-dom"
import './styles/Button/button.css';
import './styles/style.css';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Login from './pages/Login/login';
import Signup from './pages/Login/signup';
import Search from "./pages/tutor_search/search";
import Admin from './pages/admin/admin';
import Student from "./pages/student/student";


function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/student" element={<Student />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
