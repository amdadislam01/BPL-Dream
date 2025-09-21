import React from 'react'

const SelectedCards = ({player}) => {
    console.log(player);
    
    return (
        <div className="border-2 border-gray-200 p-3 flex justify-between items-center rounded-2xl mb-4">
            {/* left */}
            <div className="flex items-center gap-4">
                <img src={player.player_image} alt="playerImage" className='w-20 h-20 rounded-2xl' />
                <div className="ml-2">
                    <h1 className='text-xl font-bold text-gray-700'>{player.player_name}</h1>
                    <p className='text-sm text-gray-500'>{player.playing_role}</p>
                </div>
            </div>
            {/* right */}
            <div className="">
                <img src="https://i.ibb.co.com/5gNbBr2x/icons8-delete-100.png" className='w-10 h-10' alt="DeleteBtn" />
            </div>
        </div>
    )
}

export default SelectedCards
