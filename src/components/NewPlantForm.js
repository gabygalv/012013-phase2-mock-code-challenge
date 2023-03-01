import React, { useState } from "react";

function NewPlantForm({onFormSubmit}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)

  function handleName(e) {
    setName(e.target.value)
  }

  function handleImage(e) {
    setImage(e.target.value)
  }

  function handlePrice(e) {
    setPrice(e.target.value)
  }

  const newPlant = {
    name, 
    image, 
    price}

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
    })
    .then(res => res.json())
    .then(onFormSubmit)
    setName('')
    setImage('')
    setPrice('')
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleName} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handlePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
