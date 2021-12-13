import { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Faves from "./pages/Faves";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [data, setData] = useState();

  const fetchApi = async () => {
    const BASE_URL =
      "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0";

    const response = await fetch(BASE_URL);
    const responseJSON = await response.json();
    setData(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Router>
      <Header />
      {!data ? (
        <h1>Hola mundo</h1>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home data={data} />} />
          <Route exact path="/faves" element={<Faves />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
