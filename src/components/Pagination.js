import "../styles/Pagination.css";
import Button from "./Button";

const Pagination = ({ newsPerPage, totalNews, paginate }) => {
  const pageNumbers = [];

  for (let idx = 1; idx <= Math.ceil(totalNews / newsPerPage); idx++) {
    pageNumbers.push(idx);
  }

  return (
    <div className="pagination">
      <Button text="<" />
      {pageNumbers.map((number) => (
        <Button
          handleClick={() => paginate(number)}
          key={number}
          text={number}
        />
      ))}
      <Button text=">" />
    </div>
  );
};

export default Pagination;
