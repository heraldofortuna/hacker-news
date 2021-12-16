import { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./layouts/Header";
import Loading from "./pages/Loading";
import Home from "./pages/Home";
import Faves from "./pages/Faves";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * @returns El componente principal que devuelve la aplicación completa.
 */
const App = () => {
  const [query, setQuery] = useState("angular");
  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  // Función que trae el valor del query y lo actualiza en la aplicación.
  const handleQuery = () => {
    const newQuery = localStorage.getItem("query");
    setQuery(newQuery);
    setPage(1);
    fetchApi(newQuery, 0);
  };

  // Función que trae el valor de la página actual y lo actualiza en la aplicación.
  const handlePage = (newPage) => {
    setPage(newPage);
    fetchApi(query, newPage - 1);
  };

  // Función que realiza el fetch del API con un URL específico.
  const fetchApi = async (apiQuery = "angular", apiPage = 0) => {
    const URL = `https://hn.algolia.com/api/v1/search_by_date?query=${apiQuery}&page=${apiPage}`;
    const response = await fetch(URL);
    const responseJSON = await response.json();
    const filteredData = responseJSON.hits.filter(
      (item) =>
        (item.author &&
          item.story_title &&
          item.story_url &&
          item.created_at) !== null
    );
    const result = filteredData.map((el) => {
      const finalData = Object.assign({}, el);
      finalData.isFave = false;
      return finalData;
    });

    setData(result);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Router>
      <Header />
      {!data ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                data={data}
                currentPage={page}
                changeQuery={handleQuery}
                changePage={handlePage}
              />
            }
          />
          <Route exact path="/faves" element={<Faves />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
