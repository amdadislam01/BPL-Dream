import React from 'react'
import SelectedCards from '../SelectedCards/SelectedCards'

const SelectedPlayers = ({ buyPlayers, removePlayer }) => {
    // console.log(buyPlayers);

    return (
        <div className='max-w-7xl mx-auto px-10 mt-10'>
           {
            buyPlayers.map(player => <SelectedCards removePlayer={removePlayer} player={player} />)
           }
        </div>
    )
}

export default SelectedPlayers
