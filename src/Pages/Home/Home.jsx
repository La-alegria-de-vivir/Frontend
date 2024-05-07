import React from 'react'
import HomeImage from "../../Components/HomeImage/HomeImage.jsx";
import Menu from "../../Components/Menu/Menu.jsx";
import Grid from '../../Components/Grid/Grid.jsx';
import AboutUs from '../../Components/AboutUs/AboutUs.jsx';

export default function Home() {
  return (
    <div>
    <HomeImage/>
    <Menu/>
    <Grid/>
    <AboutUs/>
    </div>
  )
}
