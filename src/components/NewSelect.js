import "../styles/NewSelect.css";
import IconOption from "./IconOption";
import Select from "react-select";

const options = [
  { value: "angular", label: "Angular", icon: "angular.png" },
  { value: "reactjs", label: "Reactjs", icon: "reactjs.png" },
  { value: "vuejs", label: "Vuejs", icon: "vuejs.png" },
];

const NewSelect = ({ changeQuery }) => {
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
