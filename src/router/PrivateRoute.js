import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";



const PrivateRoute = ({ allowedRights }) => {
  const token = Cookies.get("token" || "");
  
  // const auth = useAuth();

  return token? 
          <Outlet /> : 
          // <Navigate to="/login" />;
          <Outlet />
};

export default PrivateRoute;
