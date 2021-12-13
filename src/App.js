import "./styles/App.css";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Faves from "./pages/Faves";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/faves" element={<Faves />} />
      </Routes>
    </Router>
  );
};

export default App;
