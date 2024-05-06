import { useState } from 'react'
import HomeImage from './Components/HomeImage/HomeImage.jsx'
import Menu from './Components/Menu/Menu.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
     <HomeImage/>
     <Menu/>
    </main>
  )
}

export default App
