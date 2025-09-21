import React from 'react'
import SelectedCards from '../SelectedCards/SelectedCards'

const SelectedPlayers = ({ buyPlayers }) => {
    // console.log(buyPlayers);

    return (
        <div className='max-w-7xl mx-auto px-10 mt-10'>
           {
            buyPlayers.map(player => <SelectedCards player={player} />)
           }
        </div>
    )
}

export default SelectedPlayers
