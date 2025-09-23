import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playerPromise,
  availableBalance,
  setAvailableBalance,
  buyPlayers,
  setBuyPlayers,
}) => {
  const playersData = use(playerPromise);
  // console.log(playersData);

  return (
    <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-3">
      {playersData.map((player, index) => (
        <PlayerCard
          key={index}
          player={{ ...player, player_id: index }}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          buyPlayers={buyPlayers}
          setBuyPlayers={setBuyPlayers}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
