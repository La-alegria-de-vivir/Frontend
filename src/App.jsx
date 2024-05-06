import { useState } from 'react'
import HomeImage from './Components/HomeImage/HomeImage.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
     <HomeImage/>
    </main>
  )
}

export default App
