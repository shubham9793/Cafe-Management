/*import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  Router,
  Routes,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Home from "./components/Home.jsx";

import Login from "./Pages/Login.jsx";

import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Registration from "./Pages/Registration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Login", element: <Login /> },
      { path: "/Registration", element: <Regstration /> },
      { path: "/forgotPassword", element: <ForgotPassword /> },
      {
        path: "/dashboard",
        element: <PrivateRoute path="/dashboard" element={<Dashboard />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>
);

*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
