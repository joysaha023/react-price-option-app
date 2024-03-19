
import './App.css'
import LineGraph from './components/LineGraph/LineGraph'
import Navber from './components/Navbar/Navber'
import PriceOption from './components/PriceOption/PriceOption'

function App() {
 

  return (
    <>
      <div>
        <Navber></Navber>
        <PriceOption></PriceOption>
        <LineGraph></LineGraph>
      </div>
     
    </>
  )
}

export default App
