import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <ul className="flex justify-center space-x-2 mt-4">
        <li>
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            className="px-4 py-2 text-white font-bold rounded transition-colors duration-300 transform bg-gradient-to-r from-[#AEAF50] to-[#F3C14C] hover:from-[#adaf50bd] hover:to-[#F3C14C] disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Anterior
          </button>
        </li>
        <li>
          <button
            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
            className="px-4 py-2 text-white font-bold rounded transition-colors duration-300 transform bg-gradient-to-r from-[#AEAF50] to-[#F3C14C] hover:from-[#adaf50bd] hover:to-[#F3C14C] disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
