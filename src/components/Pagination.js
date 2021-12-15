import "../styles/Pagination.css";
import Button from "./Button";

const Pagination = ({ paginate, currentPage}) => {
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
