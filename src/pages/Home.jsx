import Tab from "../components/Tab";
import NewSelect from "../components/NewSelect";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

/**
 * @param {data} Los datos de esta página.
 * @param {currentPage} La página actual.
 * @param {changeQuery} Función que cambia el query.
 * @param {changePage} Función que cambia la página.
 * @returns Página principal.
 */
const Home = ({ data, currentPage, changeQuery, changePage }) => {
  const handleQuery = (query) => changeQuery(query);

  // Función que cambia la página.
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
          <Tab inFaves={false} />
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
