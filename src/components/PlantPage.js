import React,{useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({setIsSave}) {
  const [plantsArray, setplantsArray] = useState([])
  const [searchWord, setSearchWord] = useState("")
 
  useEffect(()=> {
    fetch('http://localhost:6001/plants')
    .then(res=> res.json())
    .then(plantObj => setplantsArray(plantObj))
  }, [])

  
  function handleAdd(newPlant){
    setplantsArray([...plantsArray, newPlant])

    fetch('http://localhost:6001/plants',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(newPlant)
    })
    
  }
  console.log(plantsArray)
  
  
  
  return (
    <main>
      <NewPlantForm onUpdatePlant={handleAdd} setIsSave={setIsSave}/>
      <Search onSearchWord={setSearchWord}/>
      <PlantList plantsArray={plantsArray} searchWord={searchWord}/>
    </main>
  );
}

export default PlantPage;
