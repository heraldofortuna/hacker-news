import { components } from "react-select";

/**
 * @returns Componente que renderiza un ícono en cada opción del selector.
 */
const IconOption = (props) => {
  const { Option } = components;

  return (
    <Option {...props}>
      <img
        src={props.data.icon}
        alt={props.data.label}
      />
      {props.data.label}
    </Option>
  );
};

export default IconOption;
