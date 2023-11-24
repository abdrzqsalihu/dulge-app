import { Route, Routes, useLocation } from "react-router-dom";
import "swiper/css/bundle";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/jquery/dist/jquery.js";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import Protected from "./pages/auth/Protected.jsx";
// import Sidebar from "./Components/Sidebar.jsx";
import Kanban from "./pages/Kanban.jsx";
import Todos from "./pages/Todos.jsx"
import Notes from "./pages/Notes.jsx"
import Statistics from "./pages/Statistics.jsx"

function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/Dashboard" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/Kanban" ||
    location.pathname === "/kanban" ||
    location.pathname === "/Todos" ||
    location.pathname === "/todos" ||
    location.pathname === "/Notes" ||
    location.pathname === "/notes" ||
    location.pathname === "/Statistics" ||
    location.pathname === "/statistics";

  const ProtectedRoute = ({ element: Element }) => (
    <Protected>
          <Element />
    </Protected>
  );

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
          <Route>
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={Dashboard} />}
            />
            <Route
              path="/kanban"
              element={<ProtectedRoute element={Kanban} />}
            />
            <Route
              path="/todos"
              element={<ProtectedRoute element={Todos} />}
            />
            <Route
              path="/notes"
              element={<ProtectedRoute element={Notes} />}
            />
            <Route
              path="/statistics"
              element={<ProtectedRoute element={Statistics} />}
            />
            {/* <Route
              path="/OtherPath2"
              element={<ProtectedRoute element={OtherComponent2} />}
            /> */}
            {/* Add more routes as needed */}
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
