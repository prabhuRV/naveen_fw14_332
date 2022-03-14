import React from "react";

const FormInput = ({formData,setFormdata})=> {
    const handleChange= (e)=> {
        const {id,value} = e.target
        setFormdata({...formData, [id]:value})
    }
    const handleSubmit = (e)=> {
        e.preventDefault()
        setFormdata({...formData}, e)
        console.log(formData)
    }
    return (
        <form>
            <input
            type="text"
            id="name"
            placeholder="enter name"
            onChange={handleChange}/>
            <input type="number" id="age" placeholder="enter age" onChange={handleChange} />
            <input type="textarea" id="Address" placeholder="enter address" onChange={handleChange} />
            <br/>
            <br/>
            <select id="Department" onChange={handleChange}>
                <option value="operations">Operations</option>
                <option value="curr">Curricullum</option>
                <option value="finance">Finance</option>
            </select>
            <input type="number" id="Salary" placeholder="Enter salary" onChange={handleChange}/>
            <label>
                
            <input type="checkbox" id="MaritalState" placeholder="marital state" onChange={handleChange}/>
            Marital state
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export {FormInput}