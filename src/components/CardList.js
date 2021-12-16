import "../styles/CardList.css";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <div className="cardlist">
      {data.map((item) => (
        <Card key={item.objectID} data={item} />
      ))}
    </div>
  );
};

export default CardList;
