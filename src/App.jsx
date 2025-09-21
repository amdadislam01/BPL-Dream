import React, { Suspense, useState } from 'react'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import NewsLatter from './components/NewsLatter/NewsLatter'


const playes = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

const playerPromise = playes()

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(1000000);
  const [buyPlayers, setBuyPlayers] = useState([]);

  const removePlayer = (p) => {
    const filterPayers = buyPlayers.filter(ply => ply.id !== p.id)
    setBuyPlayers(filterPayers);
  }
  // console.log(buyPlayers);
  
  // const handleToggle = () => {
  //   setToggle(!toggle)
  // }
  
  return (
    <>
      <Navbar availableBalance={availableBalance} />
      <Home setToggle={setToggle} toggle={toggle} />
      {/* Availavle / Selected */}
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <h1 className='font-bold text-2xl'>{toggle === true ? 'Available Players' : `Selected Player (${buyPlayers.length}/6)`}</h1>
        <div className="">
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-r-0 border-gray-300  font-bold rounded-l-xl cursor-pointer ${toggle===true ? 'bg-[#E7FE29]' : ''}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-l-0 border-gray-300 rounded-r-xl cursor-pointer ${toggle===false ? 'bg-[#E7FE29]' : ''}`}>Selected <span>({buyPlayers.length})</span></button>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<div className="flex justify-center items-center h-screen text-2xl">
          <span className="loading loading-spinner text-neutral"></span>
        </div>
        }>
          <AvailablePlayers buyPlayers={buyPlayers} setBuyPlayers={setBuyPlayers}  availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise} />
        </Suspense> : <SelectedPlayers removePlayer={removePlayer} buyPlayers={buyPlayers}  />
      }
      <NewsLatter />
      <Footer />
    </>
  )
}

export default App
