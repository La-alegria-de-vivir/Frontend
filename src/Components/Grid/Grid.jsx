import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';

const loadImages = () => {
  const imageData = [
    { name: '1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: '2.jpg', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: '3.jpg', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { name: '4.jpg', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { name: '5.jpg', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { name: '6.jpg', description: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.' },
    { name: '7.jpg', description: 'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.' },
    { name: '8.jpg', description: 'Integer in mauris eu nibh euismod gravida.' },
    { name: '9.jpg', description: 'Duis ac tellus et risus vulputate vehicula.' },
    { name: '10.jpg', description: 'Donec lobortis risus a elit. Etiam tempor.' },
    { name: '11.jpg', description: 'Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.' },
    { name: '12.jpg', description: 'Maecenas fermentum consequat mi. Donec fermentum.' },
    { name: '13.jpg', description: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.' },
    { name: '14.jpg', description: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat.' },
    { name: '15.jpg', description: 'Cras mollis scelerisque nunc. Nullam arcu.' },
    { name: '16.jpg', description: 'Vivamus vestibulum ntulla nec ante.' },
    { name: '11.jpg', description: 'Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.' },
    { name: '12.jpg', description: 'Maecenas fermentum consequat mi. Donec fermentum.' },
  ];

  return imageData.map(item => ({ url: `/images/${item.name}`, description: item.description }));
}

const Grid = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(3);

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
      <div className="grid grid-cols-3 gap-4 mt-4 ml-20">  {/* Cambiado a 3 columnas */}
        {currentImages.map((image, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.url} alt={`Imagen ${index + 1}`} className="w-full" />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">{image.description}</p>
            </div>
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
