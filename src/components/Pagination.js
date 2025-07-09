import "../styles/Pagination.css";
import Button from "./Button";

const Pagination = ({ paginate, currentPage, totalPages }) => {
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisible = 5;
    
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }
    
    return visiblePages;
  };

  return (
    <div className="pagination">
      <Button
        text="<"
        handleClick={() => paginate("<")}
        disabled={currentPage === 1}
      />
      
      {getVisiblePages().map((number) => (
        <Button
          key={number}
          text={number}
          handleClick={() => paginate(number)}
          focused={currentPage === number}
        />
      ))}
      
      <Button
        text=">"
        handleClick={() => paginate(">")}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;