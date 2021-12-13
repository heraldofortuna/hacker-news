import "../styles/CardList.css";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <div className="cardlist">
      <Card data={data[0]} />
      <Card data={data[1]} />
      <Card data={data[2]} />
      <Card data={data[3]} />
      <Card data={data[4]} />
    </div>
  );
};

export default CardList;
