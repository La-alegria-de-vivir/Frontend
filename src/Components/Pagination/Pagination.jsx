import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2 mt-4">
        {pageNumbers.map(number => (
          <li key={number} className="list-none">
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 ${
                currentPage === number ? 'bg-blue-700' : ''
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
