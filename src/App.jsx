import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Reservation from './Pages/Reservation/Reservation.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx'

function App() {
  

  return (
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>
      </BrowserRouter>
  )
}

export default App
