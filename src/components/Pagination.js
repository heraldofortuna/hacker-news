import "../styles/Pagination.css";
import Button from "./Button";

const Pagination = ({ paginate, previousPage, nextPage }) => {
  const pageNumbers = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <Button text="<" handleClick={() => previousPage()} disabled={false} />
      {pageNumbers.map((number) => (
        <Button
          text={number}
          handleClick={() => paginate(number)}
          key={number}
          focused={false}
        />
      ))}
      <Button text=">" handleClick={() => nextPage()} disabled={false} />
    </div>
  );
};

export default Pagination;
