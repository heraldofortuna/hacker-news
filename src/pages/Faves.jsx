import Tab from "../components/Tab";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";

const ITEMS_PER_PAGE = 8;

const Faves = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = () => {
      const loadedData = [];
      for (let key in localStorage) {
        if (key === "query") return;
        try {
          const item = localStorage.getItem(key);
          if (item) {
            const itemJSON = JSON.parse(item);
            if (itemJSON !== null) {
              loadedData.push(itemJSON);
            }
          }
        } catch (e) {
          console.error("Error parsing item from localStorage:", e);
        }
      }
      setData(loadedData);
    };

    loadData();
  }, []);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePaginate = (page) => {
    if (page === "<") {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    } else if (page === ">") {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <main>
      <div className="container">
        <section className="tab-section">
          <Tab inFaves={true} />
        </section>
        <section>
          <CardList data={paginatedData} />
        </section>
        {totalPages > 1 && (
          <section className="navigator-section">
            <Pagination
              paginate={handlePaginate}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </section>
        )}
      </div>
    </main>
  );
};

export default Faves;