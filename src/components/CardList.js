import "../styles/CardList.css";
import Card from "./Card";

/**
 * @param {data} Datos de la lista de noticias que se mostraran.
 * @returns Componente que renderiza la lista de noticias que se mostraran.
 */
const CardList = ({ data }) => {
  if (data.length === 0) return <p className="cardlist__text">No items</p>

  return (
    <div className="cardlist">
      {data.map((item) => (
        <Card key={item.objectID} data={item} />
      ))}
    </div>
  );
};

export default CardList;
