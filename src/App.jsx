import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './NavBar/Navbar'
import PricingOption from './PricingOption/PricingOption'

 const pricingPromise =fetch('PricingData.json').then(res=>res.json());

function App() {
  

  return (
    <>
      <header>
      <Navbar> </Navbar>
        
    
      </header>
      <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}> 
        <PricingOption pricingPromise={pricingPromise}> </PricingOption> 
      </Suspense>  

      </main>
      <footer></footer>

    </>
  )
}

export default App
