import "../styles/NewSelect.css";
import IconOption from "./IconOption";
import Select from "react-select";

// Opciones del selector.
const options = [
  { value: "angular", label: "Angular", icon: "angular.png" },
  { value: "reactjs", label: "Reactjs", icon: "reactjs.png" },
  { value: "vuejs", label: "Vuejs", icon: "vuejs.png" },
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
