import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDelete}) {
  const plantObj = plants.map((plant) => {
    return <PlantCard onDelete={onDelete} key={plant.id} plant={plant}/>
  })
  return (
    <ul className="cards">
    {plantObj}
    </ul>
  );
}

export default PlantList;
