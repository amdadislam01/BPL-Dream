import React from 'react'
import SelectedCards from '../SelectedCards/SelectedCards'

const SelectedPlayers = ({ buyPlayers, removePlayer, setToggle }) => {
    // console.log(buyPlayers);

    return (
        <div className='max-w-7xl mx-auto px-10 mt-10'>
            {
                buyPlayers.map(player => <SelectedCards removePlayer={removePlayer} player={player} />)
            }
            <button onClick={() => setToggle(true)} className='px-4 py-3 bg-[#E7FE29] rounded-md font-bold cursor-pointer border-1 border-gray-400'>Add New Players</button>
        </div>
    )
}

export default SelectedPlayers
