const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 3;

  const generatePageRange = () => {
    let start = Math.max(1, currentPage - 1);
    let end = start + maxVisiblePages - 1;
    if (end >= totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = generatePageRange();

  return (
    <div className="flex justify-center my-4 font-poppins gap-2 flex-wrap">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:shadow-lg cursor-pointer"
      >
        First
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:shadow-lg cursor-pointer"
      >
        &lt; Prev
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 ${currentPage === page ? "bg-skyn text-white" : "bg-gray-200"} text-gray-700 hover:shadow-lg rounded`}
        >
          {page}
        </button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          <span className="px-4 py-2 text-gray-500 ">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:shadow-lg cursor-pointer"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:shadow-lg cursor-pointer"
      >
        Next &gt;
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:shadow-lg cursor-pointer"
      >
        Last
      </button>
    </div>
  );
};

export default PaginationControls;
