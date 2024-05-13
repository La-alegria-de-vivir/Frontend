import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';

const Grid = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(3);

  useEffect(() => {
    fetch('/api/menu/getmenu')
      .then(response => response.json())
      .then(data => {
        if (data && data.menu && Array.isArray(data.menu)) {
          const processedData = data.menu.map(item => ({
         
            url: item.image,
            title: item.title,
            description: item.description,
            id: item._id || item.id 
          }));
          setImages(processedData);
        } else {
          console.error('La respuesta de la API no contiene un array de menú válido:', data);
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos del menú:', error);
      });
  }, []);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4">
      <div className='section-AboutUs-div1'>
        <h2>Nuestros <span className='title-2-word'>Platos</span></h2>
        <hr className='hr1'/>
        <hr className='hr2'/>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 ml-20">
        {currentImages.map((menu) => (
          <div key={menu.id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={menu.url} alt={menu.title} className="w-full" />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">{menu.title}</p>
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
