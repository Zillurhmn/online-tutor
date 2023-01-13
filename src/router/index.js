import { Routes, Route, BrowserRouter as Router, BrowserRouter } from "react-router-dom"
import About from '../pages/about/about';
import Login from '../pages/Login/login';
import Signup from '../pages/Login/signup';
import Search from "../pages/tutor_search/search";
import Admin from '../pages/admin/admin';
import Student from "../pages/student/student";
import Home from '../pages/home/home';
import Contact from "../pages/contact/contact";
import Navbar from "../conponent/Navbar/navbar";
import Footer from "../conponent/Footer/footer";
import PrivateRoute from "./PrivateRoute";


const RouteList = () => {
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
        
           <Route
                element={<PrivateRoute/>}
              >
                 <Route path="/student" element={<Student />} />
              </Route>
      </Routes>

      <Footer/>
     
    </BrowserRouter>
    </div>
  );
};

export default RouteList;
