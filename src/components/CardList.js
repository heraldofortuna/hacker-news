import "../styles/CardList.css";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <div className="cardlist">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default CardList;
