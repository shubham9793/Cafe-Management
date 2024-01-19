import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home.jsx";
import Login from "./Pages/Login.jsx";

import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Registration from "./Pages/Registration.jsx";
import Dashboard from "./User-route/Dashboard.jsx";
import UserProfile from "./User-route/UserProfile.jsx";

/*
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <div className="appContainer">
        { {isLoggedIn && (
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        )} }
        <div className="content">
          <ToastContainer />
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

*/

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

        <Route path="/user" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          {<Route path="profile-info" element={<UserProfile />} />}
          {/* <Route path="update-blog/:blogId" element={<UpdateBlog />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
