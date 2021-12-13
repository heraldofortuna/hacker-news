import "../styles/NewSelect.css";
import IconOption from "./IconOption";
import Select from "react-select";

const NewSelect = () => {
  const options = [
    { value: "Angular", label: "Angular", icon: "angular.png" },
    { value: "Reactjs", label: "Reactjs", icon: "reactjs.png" },
    { value: "Vuejs", label: "Vuejs", icon: "vuejs.png" },
  ];

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      components={{ Option: IconOption }}
    />
  );
};

export default NewSelect;
