import React, { useEffect } from 'react'
import { useContext } from 'react'
import { RegContext } from '../Context/RegContext'
import { useNavigate } from 'react-router-dom'
const Registration2 = () => {
    const {dispatch,handleSubmit,Name,Age,DOB} = useContext(RegContext)
    const Navigate = useNavigate()
    useEffect(()=> {
        if(!Name || !Age || !DOB){
            Navigate("/registration/one")
        }
    },[])
  return (
    <div>
      <h1>Registration Two </h1>  
        <form>
            <input 
            placeholder='State of Residence'
            type= "text"
            onChange={(e)=> dispatch({type:"RESIDENCE", payload:"e.target.value"})}
            />
             <input 
            placeholder='Address'
            type= "text"
            onChange={(e)=> dispatch({type:"ADDRESS", payload:"e.target.value"})}
            />
             <input 
            placeholder='Pincode'
            type= "number"
            onChange={(e)=> dispatch({type:"PINCODE", payload:"e.target.value"})}
            />

        </form>
        <button onClick={handleSubmit()}>
            Submit
        </button>
    </div>
  )
}

export default Registration2