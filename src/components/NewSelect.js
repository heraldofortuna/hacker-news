import "../styles/NewSelect.css";
import IconOption from "./IconOption";
import Select from "react-select";
import AngularIcon from "../assets/angular.png";
import ReactJsIcon from "../assets/reactjs.png";
import VueJsIcon from "../assets/vuejs.png";

// Opciones del selector.
const options = [
  { value: "angular", label: "Angular", icon: AngularIcon },
  { value: "reactjs", label: "Reactjs", icon: ReactJsIcon },
  { value: "vuejs", label: "Vuejs", icon: VueJsIcon },
];

/**
 * @param {changeQuery} Función que cambia el query.
 * @returns Componente que renderiza el selector de tipo de noticias.
 */
const NewSelect = ({ changeQuery }) => {
  // Función que maneja el cambio de queries.
  const handleQueryChanged = (option) => {
    localStorage.setItem("query", option.value);
    changeQuery(option.value);
  };

  return (
    <Select
      className="react-select-container"
      classNamePrefix="react-select"
      defaultValue={options[0]}
      options={options}
      components={{ Option: IconOption }}
      onChange={handleQueryChanged}
    />
  );
};

export default NewSelect;
