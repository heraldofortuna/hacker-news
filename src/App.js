import { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Faves from "./pages/Faves";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const BASE_URL =
      "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0";

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((apiData) => {
        console.log(apiData);
        setData(apiData);
      });
  }, []);

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
