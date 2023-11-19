import { Route, Routes, useLocation } from "react-router-dom";
import "swiper/css/bundle";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/jquery/dist/jquery.js";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./Components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/Dashboard";
import Protected from "../pages/auth/Protected.jsx";

function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/signin" || location.pathname === "/signup";
  return (
    <div className="App">
      <AuthContextProvider>
        {hideNavbar ? null : <Header />}
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/Dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
