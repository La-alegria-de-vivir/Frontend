import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';


const loadImages = () => {

  const imageNames = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg'];

  return imageNames.map(name => `/images/${name}`);
}

const Grid = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(4);

  useEffect(() => {
    const fetchedImages = loadImages();
    setImages(fetchedImages);
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
