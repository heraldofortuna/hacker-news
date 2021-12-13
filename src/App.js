import "./styles/App.css";
import Header from "./components/Header";
import Tab from "./components/Tab";
import Card from "./components/Card";
import NewSelect from "./components/NewSelect";

const App = () => {
  return (
    <div>
      <Header />
      <Tab />
      <Card />
      <NewSelect />
    </div>
  );
};

export default App;
