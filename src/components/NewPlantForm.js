import React, {useState} from "react";

function NewPlantForm({onUpdatePlant, setIsSave}) {
  const [formData, setForm] = useState({
    name: "",
    image:"",
    price: ""
  })
  function handleSubmit(e){
    e.preventDefault()
    setIsSave(false)
    onUpdatePlant(formData)

    setForm({name: "",
  image: "",
  price: ""
  })
  }

  function handleChange(e){
    e.preventDefault()
    setIsSave(true)
    let key = e.target.name
    let value = e.target.value
    if(key ==="price"){
      
      setForm({...formData, 
        [key] : parseInt(value)
      }
      )
    }else {
    setForm({...formData, 
      [key] : value
    }
    )
  }
      
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
