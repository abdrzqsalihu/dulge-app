import { Route, Routes, useLocation } from "react-router-dom";
import "swiper/css/bundle";
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/jquery/dist/jquery.js';
import { AuthContextProvider } from "./context/AuthContext";
import Header from './Components/Header';
import Home from './Components/Home';
import About from "./Components/About";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Protected from "./Components/Protected";

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === '/signin' || location.pathname === '/signup';
  return (
    <div className='App'>
      <AuthContextProvider>
      {hideNavbar ? null : <Header />}
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Dashboard" 
          element={
          <Protected>
            <Dashboard />
          </Protected>
          }/>

        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
 