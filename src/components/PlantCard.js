import React,{useState} from "react";

function PlantCard({plant}) {
  const [isSold, setIsSold] = useState(true)
  const [updateForm, setupdateForm] = useState(true)

  const {image, name, price} = plant
  function handleSold(){
    setIsSold(false)
  }
  function handleButon(){
    setupdateForm(false)
 
    
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      
      <p>Price: {price}</p>
      {isSold ? (
        <button className="primary" onClick={handleSold}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}

      {updateForm ? (
      <button onClick={handleButon} style={{backgroundColor: "#90EE90"}}>Update Price</button>
      ) : ( <form >
        <input type="number" name="price" placeholder="Update Price" />
        <button onClick={handleButon} style={{backgroundColor: "#90EE90"}}>Update Price</button>
        </form>)

      
}
    </li>
  );
}

export default PlantCard;
