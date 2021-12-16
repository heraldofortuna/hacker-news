import "../styles/Tab.css";
import { Link } from "react-router-dom";

/**
 * @param {inFaves} Booleano que me indica si estoy en la página de favoritos.
 * @returns Componente que renderiza el tabulador de páginas: Home y Faves.
 */
const Tab = ({ inFaves }) => {
  return (
    <div className="tab">
      <Link to="/">
        <button
          className={
            inFaves
              ? "tab__item tab__item--left"
              : "tab__item tab__item--left tab__item--left--focused"
          }
        >
          All
        </button>
      </Link>
      <Link to="/faves">
        <button
          className={
            inFaves
              ? "tab__item tab__item--right tab__item--right--focused"
              : "tab__item tab__item--right"
          }
        >
          My faves
        </button>
      </Link>
    </div>
  );
};

export default Tab;
