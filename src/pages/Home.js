import NewSelect from "../components/NewSelect";
import Card from "../components/Card";
import Navigator from "../components/Navigator";
import Tab from "../components/Tab";

const Home = () => {
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
          <Card />
        </section>
        <section className="navigator-section">
          <Navigator />
        </section>
      </div>
    </main>
  );
};

export default Home;
