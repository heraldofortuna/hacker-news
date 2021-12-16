import "../styles/Button.css";

/**
 * @param {text} Texto que contiene el botón.
 * @param {handleClick} Función que maneja los clicks en el botón.
 * @param {disabled} Booleano que nos dice si el botón está deshabilitado.
 * @param {focused} Booleano que nos dice si el bóton está presionado.
 * @returns Componente que renderiza los botones de la paginación.
 */
const Button = ({ text, handleClick, disabled, focused }) => {
  return (
    <button
      className={
        disabled
          ? "button button--disabled"
          : "button" && focused
          ? "button button--focused"
          : "button"
      }
      onClick={() => handleClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
