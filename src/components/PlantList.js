import React from "react";
import PlantCard from "./PlantCard";


function PlantList({plantsArray, searchWord}) {
 
  
  const filterSearch = plantsArray.filter(plants => 
   
      plants.name.toLowerCase().includes(searchWord.toLowerCase())
  
  )


  const displayPlants = filterSearch.map(plant => 
    <PlantCard key={plant.id} plant={plant} />
    )
  return (
    <ul className="cards">
      {displayPlants}</ul>
  );
}

export default PlantList;
