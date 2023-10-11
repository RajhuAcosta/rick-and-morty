import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRandomNumber } from './utils/random'
import Location from './components/Location';
import ResidentList from './components/ResidentList';

function App() {

  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
    .then(({data})=>setLocation(data))
    .catch((error)=>console.log(error))
  }, [])
  

  return (
    <main className='min-h-screen bg-black text-white overflow-hidden' style={{fontFamily: "Fira Code"}}>
      <div className='bg-center bg-cover' style={{backgroundImage: "url(/backgrounds/background_header.png)"}}>
        <div 
        className='w-96 h-72 opacity-40 none -translate-y-20 xl:-translate-y-[5vh] sm:translate-x-[17.5vw] md:translate-x-44 lg:translate-x-[41vh] xl:translate-x-[57vh] 2xl:translate-x-[77vh] bg-center bg-cover' 
        style={{filter: "blur(150px)", background: "radial-gradient(100.54% 100.54% at 47.83% 48.23%, #8EFF8B 72.49%, #020A02 88.45%)"}}
        >
        </div>
        <div className='absolute top-0 -translate-y-[35vw] translate-x-[1vw] sm:-translate-y-[12vh] 2xl:-translate-y-[13vh] md:-translate-y-[12vh] sm:translate-x-[20vw] md:translate-x-[25vw] lg:translate-x-[45vh] lg:-translate-y-[15vh] xl:translate-x-[65vh] 2xl:translate-x-[82vh]'>
          <img className='w-[98vw] sm:w-[60vw] md:w-[50vw] lg:w-[47vh] xl:w-[50vh] 2xl:w-[40vh]' src="/header-images/portal.png" alt="" />
        </div>
        <div className='absolute top-[16vw] translate-x-[3vw] sm:translate-x-[20vw] sm:top-[7vh] md:translate-x-[26vw] lg:translate-x-[45.5vh] md:top-[8vh] lg:top-[11vh] 2xl:top-[10vh] xl:translate-x-[65vh] 2xl:translate-x-[83vh]'>
          <img className='w-[93vw] sm:w-[60vw] md:w-[49vw] lg:w-[47vh] xl:w-[49vh] 2xl:w-[38vh]' src="/header-images/title.png" alt="" />
        </div>
        <Location location={location} setLocation={setLocation}></Location>
      </div>
      <ResidentList residents={location?.residents ?? []}></ResidentList>
    </main>
  )
}

export default App