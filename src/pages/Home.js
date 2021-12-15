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
            newsPerPage={newsPerPage}
            totalNews={data.length}
            paginate={paginate}
          />
        </section>
      </div>
    </main>
  );
};

export default Home;
