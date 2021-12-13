import "../styles/Tab.css";
import { Link } from "react-router-dom";

const Tab = () => {
  return (
    <div className="tab">
      <Link to="/">
        <button className="tab__item tab__item--left">All</button>
      </Link>
      <Link to="/faves">
        <button className="tab__item tab__item--right">My faves</button>
      </Link>
    </div>
  );
};

export default Tab;
