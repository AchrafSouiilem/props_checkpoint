import React from 'react'
import Player from './player'
import { Players } from './players'

const PlayersList = () => {
  let styleObject = {display: "flex", justifyContent: "space-evenly"}
  return (
    <div style={styleObject}>
        {Players.map(player => {return <Player playerDetails={player} key={player.name}/>})}
    </div>
  )
}

export default PlayersList