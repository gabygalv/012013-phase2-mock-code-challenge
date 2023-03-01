import React, { useState } from "react";

function PlantCard({plant , onDelete}) {
  const {name, image, price} = plant;
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
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {isSold ? (
        <button onClick={toggleSold} className="primary">In Stock</button>
      ) : (<button>Out of Stock</button>)}
      <button className="button" onClick={handleDelete}> Delete </button>
    </li>
  );
}

export default PlantCard;
