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
      <aside>
          <figure className='figure1-aboutus'>
          <div className='figure1-aboutus-div-1'><img src={au4} alt="logo del restaurante" />
          <img src={au2} alt="logo del restaurante" /></div>
          <div className='figure1-aboutus-div-2'><img src={au1} alt="logo del restaurante" /></div>
          </figure>
        
        <figure className='figure2-aboutus'><img src={au3} alt="logo del restaurante" />
          <img src={au5} alt="logo del restaurante" /></figure>

      </aside>
      <article>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit impedit molestiae reprehenderit eum eaque praesentium saepe. Nisi doloribus cupiditate nihil vero aliquid, modi nam sit dicta nostrum eaque itaque laudantium?</p><br/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit voluptatibus enim adipisci itaque perferendis vel odit modi atque amet. Magni perspiciatis delectus quis distinctio numquam aspernatur. Dolorem ab amet accusantium.</p><br/>
        <img src={logo} alt="logo del restaurante" />
      </article>
    </section>
  )
}
