import React, { use } from 'react'
import userIcon from '../../assets/user.png'
import flagImg from '../../assets/flag.png'

const AvailablePlayers = ({ playerPromise }) => {
    const playersData = use(playerPromise)
    console.log(playersData);

    return (
        <div className='max-w-7xl mx-auto px-10 grid grid-cols-1  md:grid-cols-3 gap-y-6 gap-x-3'>

            {
                playersData.map(player =>
                    <div className="card bg-base-100  shadow-sm p-3">
                        <figure>
                            <img
                                src={player.player_image}
                                alt="Shoes" className='w-full object-cover h-50' />
                        </figure>
                        <div className="mt-4">
                            <div className="flex items-center gap-1">
                                <img src={userIcon} alt="" className='w-5 h-5' />
                                <h2 className="card-title">{player.player_name}</h2>
                            </div>
                            <div className="flex justify-between items-center mt-2 border-b border-gray-300 pb-2">
                                <div className="flex items-center gap-1">
                                    <img src={flagImg} alt="" className='w-4 h-4' />
                                    <span>{player.player_country}</span>
                                </div>
                                <button className='btn'>{player.playing_role}</button>
                            </div>
                            <div className="flex justify-between items-center mt-2 font-bold">
                                <span>Rating</span>
                                <span>{player.rating}</span>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                                <span className='font-bold'>{player.batting_style}</span>
                                <span>{player.bowling_style}</span>
                            </div>
                            <div className="card-actions mt-3 flex justify-between items-center">
                                <p className='font-bold'>Price: {player.price}</p>
                                <button className="btn">Choose Player</button>
                            </div>
                        </div>
                    </div>
                )
            }



        </div>
    )
}

export default AvailablePlayers
