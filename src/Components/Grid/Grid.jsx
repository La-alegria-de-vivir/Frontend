import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';

// Asíncronamente carga todas las imágenes de un directorio
async function loadImages() {
  const context = import.meta.globEager('../assets/images/*.jpg');
  return Object.values(context).map(mod => mod.default);
}

const Grid = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(4);

  useEffect(() => {
    loadImages().then(images => setImages(images));
  }, []);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentImages.map((image, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image} alt={`Imagen ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
      <Pagination 
        itemsPerPage={imagesPerPage} 
        totalItems={images.length} 
        paginate={paginate} 
        currentPage={currentPage}
      />
    </div>
  );
};

export default Grid;
