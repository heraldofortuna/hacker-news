import "../styles/Button.css";

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
