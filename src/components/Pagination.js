import "../styles/Pagination.css";
import Button from "./Button";

const Pagination = ({
  currentPage,
  lastPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = Array.from({ length: lastPage }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <Button
        text="<"
        handleClick={() => previousPage()}
        disabled={currentPage === 1}
      />
      {pageNumbers.map((number) => (
        <Button
          text={number}
          handleClick={() => paginate(number)}
          key={number}
        />
      ))}
      <Button
        text=">"
        handleClick={() => nextPage()}
        disabled={currentPage === lastPage}
      />
    </div>
  );
};

export default Pagination;
