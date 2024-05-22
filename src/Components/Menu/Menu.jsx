import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
        
        fetch('https://backend-la-alegria-de-vivir.onrender.com/api/menu/getmenu')
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.menu)) {
          setMenu(data.menu);
        } else {
          console.error('La respuesta de la API no contiene un array de menú válido:', data);
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos del menú:', error);
      });
  }, []);

  return (
    <section className='section-menu' id='Carta'>
      <h2>Nuestra <span className='title-2-word'>carta</span></h2>
      <hr className='hr1' />
      <hr className='hr2' />
      <div>
        <aside>
          <table>
            <tbody>
              {menu.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.price} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
        <figure>
        </figure>
        </div>

    </section>
  );
};

export default Menu;