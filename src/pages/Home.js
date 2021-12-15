import { useState } from "react";
import Tab from "../components/Tab";
import NewSelect from "../components/NewSelect";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

const Home = ({ data, changeQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(8);
  const handleQuery = (option) => changeQuery(option);

  // Get current news
  const lastPage = Math.ceil(data.length / newsPerPage);
  const indexOfLastNew = currentPage * newsPerPage;
  const indexOfFirstNew = indexOfLastNew - newsPerPage;
  const currentNews = data
    .filter(
      (item) =>
        (item.author &&
          item.story_title &&
          item.story_url &&
          item.created_at) !== null
    )
    .slice(indexOfFirstNew, indexOfLastNew);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
          <CardList data={currentNews} />
        </section>
        <section className="navigator-section">
          <Pagination
            currentPage={currentPage}
            lastPage={lastPage}
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
