import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantObj = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant}/>
  })
  return (
    <ul className="cards">
    {plantObj}
    </ul>
  );
}

export default PlantList;
