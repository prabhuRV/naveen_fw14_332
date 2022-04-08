import React, { useEffect } from 'react'
import { useContext } from 'react'
import { RegContext } from '../Context/RegContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Registration2 = () => {
    const {state,dispatch,Name,Age,DOB,Residence,Address,Pincode} = useContext(RegContext)
    const Navigate = useNavigate()

    useEffect(()=> {
        if(!Name || !Age || !DOB){
            Navigate("/registration/one")
        }
    },[])
    const handleChange = (e,item)=> {
        dispatch({type: `${item}`, payload: e.target.value})
    }
    const handleSubmit = ()=> {
        axios.post("http://localhost:5004/Users",{
            Name,
            Age,
            DOB,
            Residence,
            Address,
            Pincode
        }).then((res)=> {
            console.log(res.data)
        })
    }
  return (
    <div>
      <h1>Registration Two </h1>  
        <form>
            <input 
            placeholder='State of Residence'
            type= "text"
            onChange={(e)=> handleChange(e, "RESIDENCE")}
            />
             <input 
            placeholder='Address'
            type= "text"
            onChange={(e)=> dispatch({type:"ADDRESS", payload:e.target.value})}
            />
             <input 
            placeholder='Pincode'
            type= "number"
            onChange={(e)=> dispatch({type:"PINCODE", payload:e.target.value})}
            />

        </form>
        <button disabled={!Residence || !Address || !Pincode } onClick={handleSubmit}>
            Submit
        </button>
    </div>
  )
}

export default Registration2