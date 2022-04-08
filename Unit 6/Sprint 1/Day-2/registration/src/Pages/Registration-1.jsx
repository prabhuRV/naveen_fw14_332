import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegContext } from '../Context/RegContext';
const Registration1 = () => {
    const Navigate = useNavigate();
    const {state,dispatch,Name,Age,DOB} = useContext(RegContext)
  const handleNext = ()=> {
   
     Navigate("/registration/two")  

  }
  const handleChange = (e,item)=> {
    dispatch({type: `${item}`, payload: e.target.value})
    
  }

  
  
  return (
    <div>
    <h1>Registration One </h1>  <br/>
    <form>
      <input 
      placeholder='Name'
      type= "text"
      onChange={(e)=> handleChange(e, "NAME")}
      />
      <br />
      <input 
      placeholder='Age'
      type="number"
      onChange={(e)=> handleChange(e, "AGE")}
      />
      <br/>
      <input 
      placeholder='DOB'
      type="date"
      onChange={(e)=> handleChange(e, "DOB")}
      />

    </form>

      <button disabled={!Name ||!Age || !DOB} onClick={handleNext}>
        Next
      </button>
    </div>
  )
}

export default Registration1