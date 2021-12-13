import "./styles/App.css";
import Header from "./components/Header";
import Tab from "./components/Tab";
import Card from "./components/Card";
import NewSelect from "./components/NewSelect";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Header />
      <Tab />
      <Card />
      <NewSelect />
      <Button text="1" />
    </div>
  );
};

export default App;
