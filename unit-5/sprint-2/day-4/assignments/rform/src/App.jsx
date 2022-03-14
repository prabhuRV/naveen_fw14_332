import React, { useEffect } from "react"
import './App.css';
import { FormInput } from './components/FormInput';
import {DataTable} from "./components/TableData"
function App() {
  const [formData, setFormdata] = React.useState({
    name:"",
    age:"",
    Address:"",
    Department:"Operations",
    Salary :"",
    MaritalState:false,
  })
  useEffect( ()=> {
      
  },[])
  return (
    <div className="App">
      <h1>Form data</h1>
      <FormInput formData={formData} setFormdata={setFormdata}/>
      <div>
      {/* {formData.Object.keys.map( (e)=> {

      })} */}
      </div>
    </div>
  );
}

export default App;
