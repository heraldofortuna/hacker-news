import Tab from "../components/Tab";
import NewSelect from "../components/NewSelect";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

const Home = ({ data, currentPage, changeQuery, changePage }) => {
  const handleQuery = (query) => changeQuery(query);

  const paginate = (pageNumber) => {
    switch (pageNumber) {
      case "<":
        changePage(currentPage - 1);
        break;
      case ">":
        changePage(currentPage + 1);
        break;
      default:
        changePage(pageNumber);
    }
  };

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
          <Pagination paginate={paginate} currentPage={currentPage} />
        </section>
      </div>
    </main>
  );
};

export default Home;
