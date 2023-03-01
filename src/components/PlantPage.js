import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plants, setPlants] = useState([])
const [searchVal,setSearchVal] = useState('')

useEffect(() => {
fetch("http://localhost:6001/plants")
.then(res => res.json())
.then(setPlants)
}, [])

const onFormSubmit = (newPlant) => {
setPlants([...plants, newPlant])
}

function onDelete(toDelete) {
  const updatePlants =plants.filter((plant) => plant.id !== toDelete.id);
  setPlants(updatePlants);
}

  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit} />
      <Search setSearchVal={setSearchVal}/>
      <PlantList onDelete={onDelete}
      plants={plants.filter(plant => plant.name.toLowerCase().includes(searchVal.toLowerCase()))}/>
    </main>
  );
}

export default PlantPage;
