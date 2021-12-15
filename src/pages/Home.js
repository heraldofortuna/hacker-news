import { useState } from "react";
import Tab from "../components/Tab";
import NewSelect from "../components/NewSelect";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

const Home = ({ data, changeQuery, changePage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleQuery = (query) => changeQuery(query);
  const paginate = (pageNumber) => changePage(pageNumber);
  const previousPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);

  return (
    <main>
      <div className="container">
        <section className="tab-section">
          <Tab />
        </section>
        <section className="select-section">
          <NewSelect changeQuery={handleQuery} />
        </section>
        <section>
          <CardList data={data} />
        </section>
        <section className="navigator-section">
          <Pagination
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </section>
      </div>
    </main>
  );
};

export default Home;
