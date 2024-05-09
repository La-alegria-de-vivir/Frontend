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
              className={`px-4 py-2 text-white font-bold rounded transition-colors duration-300 transform ${
                currentPage === number
                  ? 'bg-gradient-to-r from-[#AEAF50] to-[#F3C14C]'
                  : 'bg-gradient-to-r from-[#AEAF50] to-[#F3C14C] hover:from-[#adaf50bd] hover:to-[#F3C14C]'
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
