import React from 'react'
import logo from '../../assets/logo.png'
import au1 from '../../assets/au1.jpg'
import au2 from '../../assets/au2.jpg'
import au3 from '../../assets/au3.jpg'
import au4 from '../../assets/au4.jpg'
import au5 from '../../assets/au5.jpg'

import './AboutUs.css'

export default function AboutUs() {
  return (
    <section className='section-AboutUs'>
      <div className='section-AboutUs-div1'>
        <h2>Nuestra cocina</h2>
        <hr className='hr1'/>
        <hr className='hr2'/>
      </div>
      <div className='section-AboutUs-div2'>      
        <aside>
        <figure className='figure1-aboutus'>
          <div className='figure1-aboutus-div-1'>
            <div><img src={au4} alt="logo del restaurante"/></div>
            <div><img src={au2} alt="logo del restaurante" /></div>
            </div>
          <div className='figure1-aboutus-div-2'>
            <img src={au1} alt="logo del restaurante" />
            </div>
        </figure>

        <figure className='figure2-aboutus'>
         <div><img src={au3} alt="logo del restaurante" /></div> 
          <div><img src={au5} alt="logo del restaurante" /></div>
          </figure>

      </aside>
        <article>
          <p>Restaurante de cocina tradicional utilizando técnicas modernas, guisos realizados sin prisa, con ollas de cocción lenta.</p>
          <p>Cocinamos a baja temperatura, lo cual nos permite que los alimentos conserven todas sus propiedades nutricionales, además de los sabores, puesto que, al estar envasados al vacío, los jugos y vapores (sustancias hidrosolubles y volátiles) que se liberan se mantienen dentro del envase, permitiendo que estos lleguen al plato sin ninguna pérdida. La cocina a baja temperatura permite a su vez respetar la textura del producto.</p>
          <p>Otra ventaja que ofrece este tipo de cocina es la marinación de los alimentos. La técnica permite dotar de aromas y sabores concretos a los alimentos de una forma tan sencilla como envasarlos junto con la salsa o mezcla deseada. Una vez puestos a calentar, estos se cocinan junto con ella, absorbiendo todo el sabor y sin ninguna pérdida</p>
          <p>Somos dos apasionados de la gastronomía, lo nuestro es emocionarnos con platos bien cocinados, sentirnos como en casa en un restaurante y eso es lo que queremos transmitir a nuestros clientes, la pasión por la comida bien hecha y el trato exquisito.
            Nos avalan más de 30 años de experiencia en la hostelería.
          </p>
          <img src={logo} alt="logo del restaurante" />
        </article>
        </div>

    </section>
  )
}














