import "../styles/Button.css";

const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      className={disabled ? "button button--disabled" : "button"}
      onClick={() => handleClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
