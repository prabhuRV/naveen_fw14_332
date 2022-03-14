import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
export const AddHouse = () => {
  const [addhouse, setHouse]  = useState({
    name:"",
    ownername:"",
    address:"",
    areaCode:"",
    rent:"",
    bachelor:"",
    married:"",
    image:""
  })
  
  const handleChange = (e)=> {
    const {id,value} = e.target
    setHouse({...addhouse, [id]:value})
    
  }
  const handleSubmit = (e)=> {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", addhouse).then(()=> {
      
    })
    
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" id="name" className="name" value={addhouse.name} onChange={handleChange} required/>
        <br />
        <label>ownerName</label>
        <input value={addhouse.ownername} type="text" id="ownername" className="ownerName" required onChange={handleChange}/>
        <br />
        <label>address</label>
        <input value={addhouse.address} type="text" className="address" id="address" required onChange={handleChange}/>
        <br />
        <label>areaCode</label>
        <input value={addhouse.areaCode} type="text" className="areaCode" id="areaCode" required onChange={handleChange}/>
        <br />
        <label>rent</label>
        <input value={addhouse.rent} type="text" id="rent" className="rent" required onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={addhouse.bachelor} type="checkbox" className="bachelor" id="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input checked={addhouse.married} type="checkbox" className="married" id="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input value={addhouse.image} type="text" className="image" id="image" onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
