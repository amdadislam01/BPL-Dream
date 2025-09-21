import React, { Suspense, useState } from 'react'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'


const playes = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

const App = () => {
  const [toggle, setToggle] = useState(true);
  // const handleToggle = () => {
  //   setToggle(!toggle)
  // }
  const playerPromise = playes()
  return (
    <>
      <Navbar />
      <Home />
      {/* Availavle / Selected */}
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <h1 className='font-bold text-2xl'>Available Players</h1>
        <div className="">
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-r-0 border-gray-300  font-bold rounded-l-xl cursor-pointer ${toggle===true ? 'bg-[#E7FE29]' : ''}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-l-0 border-gray-300 rounded-r-xl cursor-pointer ${toggle===false ? 'bg-[#E7FE29]' : ''}`}>Selected <span>(0)</span></button>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<div className="flex justify-center items-center h-screen text-2xl">
          <span className="loading loading-spinner text-neutral"></span>
        </div>
        }>
          <AvailablePlayers playerPromise={playerPromise} />
        </Suspense> : <SelectedPlayers />
      }

    </>
  )
}

export default App
