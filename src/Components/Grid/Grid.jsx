import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import './Grid.css';
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
    <div className="container mx-auto px-4">
      <div className='section-AboutUs-div1 text-center'>
        <h2>Nuestros <span className='title-2-word'>Platos</span></h2>
      </div>
      <hr className='hr1'/>
      <hr className='hr2'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {currentImages.map((menu) => (
          <div 
            key={menu.id} 
            className="max-w-sm rounded overflow-hidden shadow-lg mx-auto cursor-pointer"
            onClick={() => openModal(menu)} // Abre el modal al hacer clic
          >
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
      {showModal && selectedDish && ( // Renderiza el modal condicionalmente
        <Modal dish={selectedDish} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Grid;
