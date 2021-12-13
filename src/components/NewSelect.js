import "../styles/NewSelect.css";
import Select, { components } from "react-select";

const IconOption = (props) => {
  const { Option } = components;

  return (
    <Option {...props}>
      <img
        src={require("../assets/" + props.data.icon).default}
        alt={props.data.label}
      />
      {props.data.label}
    </Option>
  );
};

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
