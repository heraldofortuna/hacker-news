import "../styles/Navigator.css";
import Button from "./Button";

const Navigator = () => {
  return (
    <div className="navigator">
      <Button text="<" />
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      <Button text=">" />
    </div>
  );
};

export default Navigator;
