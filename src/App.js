import { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./layouts/Header";
import Loading from "./pages/Loading";
import Home from "./pages/Home";
import Faves from "./pages/Faves";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [query, setQuery] = useState("angular");
  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    fetchApi(newQuery, 0);
  };

  const handlePage = (newPage) => {
    setPage(newPage);
    fetchApi(query, newPage - 1);
  };

  const fetchApi = async (apiQuery = "angular", apiPage = 0) => {
    const URL = `https://hn.algolia.com/api/v1/search_by_date?query=${apiQuery}&page=${apiPage}`;
    console.log(URL);
    const response = await fetch(URL);
    const responseJSON = await response.json();
    const filteredData = responseJSON.hits.filter(
      (item) =>
        (item.author &&
          item.story_title &&
          item.story_url &&
          item.created_at) !== null
    );

    setData(filteredData);
  };

  useEffect(() => {
    console.log("useEffect del App");
    fetchApi();
  }, []);

  return (
    <Router>
      <Header />
      {console.log("Estoy en el return del App")}
      {!data ? (
        <Loading />
      ) : (
        <Routes>
          {console.log("Estoy en el render App -> Main")}
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
