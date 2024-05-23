import React from 'react'
import HomeImage from "../../Components/HomeImage/HomeImage.jsx";
import Menu from "../../Components/Menu/Menu.jsx";
import Grid from '../../Components/Grid/Grid.jsx';
import AboutUs from '../../Components/AboutUs/AboutUs.jsx';
import Contact from "../../Components/Contact/Contact.jsx";
import Reservation from "../../Components/Reservation/Reservation.jsx";

export default function Home() {
  return (
    <main>
    <HomeImage/>
    <Menu/>
    <Grid/>
    <AboutUs/>
    <Reservation />
    <Contact />
    
    </main>
  )
}
