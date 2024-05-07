import React, { useState, useEffect } from 'react';
import './Menu.css'

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('https://example.com/api/menu')
      .then(response => response.json())
      .then(data => setMenu(data));
  }, []);

  return (
    <section className='section-menu'>
      <aside>
      <h2>Nuestra carta</h2>
      <table>
        <tbody>
          {menu.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>  
      </aside>
      <figure>
      </figure>
      
    </section>
  );
};

export default Menu;