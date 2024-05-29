import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';

const Grid = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(3);
  const [selectedDish, setSelectedDish] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://backend-la-alegria-de-vivir.onrender.com/api/menu/getmenu')
      .then(response => response.json())
      .then(data => {
        if (data && data.menu && Array.isArray(data.menu)) {
          const processedData = data.menu.map(item => ({
            url: item.image,
            title: item.title,
            description: item.description,
            ingredients: item.ingredients || [],
            allergens: item.allergens ? item.allergens.split(',') : [],  // Convertir la cadena de alérgenos en un array
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

  const openModal = (dish) => {
    setSelectedDish(dish);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedDish(null);
    setShowModal(false);
  };

  return (
    <section className="container mx-auto px-4">
      <div className='text-center'>
        <h2>Nuestros <span className='font-bold'>Platos</span></h2>
      </div>
      <hr className='my-2'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {currentImages.map((menu) => (
          <div 
            key={menu.id} 
            className="relative max-w-sm rounded overflow-hidden shadow-lg mx-auto cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => openModal(menu)}
          >
            <img src={menu.url} alt={menu.title} className="w-full opacity-90 hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-white text-lg">Ver más</span>
            </div>
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
      {showModal && selectedDish && (
        <Modal dish={selectedDish} closeModal={closeModal} />
      )}
    </section>
  );
};

export default Grid;
