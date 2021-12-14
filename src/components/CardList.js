import "../styles/CardList.css";
import Card from "./Card";

const CardList = ({ data }) => {
  const filteredData = data.filter(
    (item) =>
      (item.author && item.story_title && item.story_url && item.created_at) !==
      null
  );

  return (
    <div className="cardlist">
      {filteredData.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default CardList;
