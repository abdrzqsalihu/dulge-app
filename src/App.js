import { Route, Routes } from "react-router-dom";
import "swiper/css/bundle";
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/jquery/dist/jquery.js';
import Header from './Components/Header';
import Home from './Components/Home';
import About from "./Components/About";

function App() {
  return (
    <div className='App'>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
 