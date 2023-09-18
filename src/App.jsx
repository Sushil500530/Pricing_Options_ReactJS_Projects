
import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/NavBar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      <Navbar />
     {/* <DaisyNav /> */}
     <h1 className='text-6xl text-violet-500 font-bold text-center my-6'>Pricing Options</h1>
     <hr className='my-5' />
     <PriceOptions />
     <LineChart />
     <Phones />
    </>
  )
}

export default App
