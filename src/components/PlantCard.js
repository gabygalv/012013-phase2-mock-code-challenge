import React, { useState } from "react";

function PlantCard({plant , onDelete}) {
  const {name, image, gender, occupation, wikiUrl} = plant;
  const [isSold, setIsSold] = useState(true)

  const toggleSold = () =>{
    setIsSold(!isSold);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {
      onDelete(plant)
    })
  }

  return (
    <ul className="card">
      <img src={image} alt={name} height="250px"/>
      <h4>{name}</h4>
      <p>Gender: {gender}</p>
      <p>Occupation: {occupation}</p>
      <a href={wikiUrl}>Wiki link</a>
      <br/>
      {isSold ? (
        <button onClick={toggleSold} className="primary">Add Friend</button>
      ) : (<button>Friends!</button>)}
      <button className="button" onClick={handleDelete}> Delete </button>
    </ul>
  );
}

export default PlantCard;
