import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx'
import ReservationPage from './Pages/ReservationPage/ReservationPage.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy.jsx';
import LegalWarning from './Pages/LegalWarning/LegalWarning.jsx';
import CookiesPolicy from './Pages/CookiesPolicy/CookiesPolicy.jsx';
import Group from './Pages/Group/Group.jsx'

function App() {
  

  return (
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/reservation' element={<ReservationPage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/legal-warning' element={<LegalWarning/>}/>
        <Route path='/cookies-policy' element={<CookiesPolicy/>}/>
        <Route path='/grupos' element={<Group/>}/>        
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>
      </BrowserRouter>
  )
}

export default App
