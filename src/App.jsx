import React, { Suspense } from 'react'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'


const playes = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

const App = () => {
  const playerPromise = playes()
  return (
    <>
      <Navbar />
      {/* Availavle / Selected */}
      
      <Suspense fallback={<div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
      }>
        <AvailablePlayers playerPromise={playerPromise} />
      </Suspense>
      <SelectedPlayers />
    </>
  )
}

export default App
