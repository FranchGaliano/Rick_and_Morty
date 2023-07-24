import React from 'react'

const Card = ({personaje}) => {
  return (
    <div id="card">
    <div>
        <img src={personaje.image}
        alt={personaje.name} />
    </div>

    <div>
        <h1>{personaje.name}</h1>
        <p>({personaje.species} - {personaje.gender})</p>
        <p>Status: {personaje.status} </p>
        
        <p>Origin: {personaje.origin.name} </p>
    </div>
</div>
  )
}

export default Card