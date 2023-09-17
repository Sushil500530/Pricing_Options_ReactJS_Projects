
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/NavBar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      <Navbar />
     <DaisyNav />
     <h1 className='text-6xl text-violet-500 font-bold text-center my-6'>Pricing Options</h1>
     <PriceOptions />
    </>
  )
}

export default App
