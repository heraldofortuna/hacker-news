import Tab from "../components/Tab";
import Navigator from "../components/Navigator";

const Faves = () => {
  return (
    <main>
      <div className="container">
        <section className="tab-section">
          <Tab />
        </section>
        <section className="navigator-section">
          <Navigator />
        </section>
      </div>
    </main>
  );
};

export default Faves;
