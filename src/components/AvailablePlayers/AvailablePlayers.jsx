import React, { use } from 'react'

import PlayerCard from '../PlayerCard/PlayerCard'

const AvailablePlayers = ({ playerPromise,availableBalance, setAvailableBalance, buyPlayers, setBuyPlayers }) => {
    const playersData = use(playerPromise)
    // console.log(playersData);

    return (
        <div className='max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-3'>

            {
                playersData.map(player =>
                    <PlayerCard buyPlayers={buyPlayers} setBuyPlayers={setBuyPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player} />
                )
            }



        </div>
    )
}

export default AvailablePlayers
