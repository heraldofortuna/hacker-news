import "../styles/Pagination.css";
import Button from "./Button";

/**
 * @param {paginate} Función que maneja el cambio página que nos dan los botones.
 * @param {currentPage} Número de página actual
 * @returns Componente que renderiza el conjunto de botones de paginación de la aplicación.
 */
const Pagination = ({ paginate, currentPage }) => {
  const pageNumbers = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <Button
        text="<"
        handleClick={() => paginate("<")}
        disabled={currentPage === 1}
      />
      {pageNumbers.map((number) => (
        <Button
          text={number}
          handleClick={() => paginate(number)}
          key={number}
          focused={currentPage === number}
        />
      ))}
      <Button
        text=">"
        handleClick={() => paginate(">")}
        disabled={currentPage === 9}
      />
    </div>
  );
};

export default Pagination;
