import Tab from "../components/Tab";
import CardList from "../components/CardList";
import Navigator from "../components/Pagination";

const Faves = () => {
  let data = [];

  for (let key in localStorage) {
    const item = localStorage.getItem(key);
    const itemJSON = JSON.parse(item);
    itemJSON !== null && data.push(itemJSON);
  }

  return (
    <main>
      <div className="container">
        <section className="tab-section">
          <Tab />
        </section>
        <section>
          <CardList data={data} />
        </section>
        <section className="navigator-section">
          <Navigator />
        </section>
      </div>
    </main>
  );
};

export default Faves;
