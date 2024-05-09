import React from 'react'
import notfound from '../../assets/image-n.png'
import './NotFound.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className='main-not-found'>
      <p>Está página no está en nuestro menú</p>
    <Link to="/"><img src={notfound} alt="imagen" /> </Link> 
    </main>
  )
}
