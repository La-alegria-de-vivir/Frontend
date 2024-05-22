import React from 'react'
import logo from '../../assets/logo.png'


import './AboutUs.css'

export default function AboutUs() {
  return (
    <section className='section-AboutUs' id='AboutUs'>
      <div className='section-AboutUs-div1'>
        <h2>Nuestra <span className='title-2-word'>cocina</span></h2>
        <hr className='hr1'/>
        <hr className='hr2'/>
      </div>
      <div className='section-AboutUs-div2'>      
        <aside>
        <figure className='figure1-aboutus'>
            <img src="https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/postal_jarra_ingrediente.jpg?alt=media&token=214faa53-f31a-4801-9fd9-6a856ea21220" alt="logo del restaurante"/>
            <img src="https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/ingredientes-2.jpg?alt=media&token=accd55a7-52ad-4623-9507-19daf146da6f" alt="logo del restaurante" />
        </figure>

        <figure className='figure2-aboutus'>
         <img src="https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/ingredientes-1.jpg?alt=media&token=37fe489c-a693-42da-a25c-a20bfa7d21c5" alt="logo del vermu del bar" /> 
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


