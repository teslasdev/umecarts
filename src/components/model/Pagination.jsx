import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PaginationComponent = ({ currentPage, totalPages, handlePageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`pre-next-btn ${currentPage === 1 ? "disabled" : ""}`}
      >
      <FaChevronLeft />
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => {
            handlePageChange(pageNumber);
          }}
          className={pageNumber === currentPage ? "pagebtn" : "nonbtn"}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`pre-next-btn ${
          currentPage === totalPages ? "disabled" : ""
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default PaginationComponent;
