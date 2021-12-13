import Tab from "../components/Tab";
import NewSelect from "../components/NewSelect";
import CardList from "../components/CardList";
import Navigator from "../components/Navigator";

const Home = ({ data }) => {
  return (
    <main>
      <div className="container">
        <section className="tab-section">
          <Tab />
        </section>
        <section className="select-section">
          <NewSelect />
        </section>
        <section>
          <CardList data={data.hits} />
        </section>
        <section className="navigator-section">
          <Navigator />
        </section>
      </div>
    </main>
  );
};

export default Home;
